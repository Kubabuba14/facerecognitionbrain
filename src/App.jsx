import './App.css';
import Navigation from './components/navigation/navigation';
import FaceRecognition from './components/facerecognition/facerecognition'
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import ParticleOptions from './components/Particles/ParticleOptions';

function App() {

const [input, setInput] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [box ,setBox] = useState({});
const [route, setRoute] = useState('signin');
const [isSignedIn, setIsSignedIn] = useState(false);
const setNewUser = useState({email: '', id: '', name: '', entries: 0, joined: ''})


 
// useEffect(() => {
//   fetch('http://localhost:3000')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Fetch error:', error));
// }, []);
// add to react imports

const loadUser = (data) => {
  setNewUser({
    email: data.email,
    id: data.id,
    name: data.name,
    entries: data.entries,
    joined: data.joined
  });
};
    

const onRouteChange = (route) => {
  if(route === 'signout'){
  setIsSignedIn(false)
} else if (route === 'home') {
  setIsSignedIn(true)
}
  setRoute(route);
}

const calculateFaceLocation = (data) => {

const clarifaiFace = JSON.parse(data).outputs[0].data.regions[0].region_info.bounding_box;  
const image = document.getElementById("inputimage");
const width = Number(image.width);
const height = Number(image.height);
return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height),
  }
};

const displayFaceBox = (box)=>{
  setBox(box);
}


const onInputChange = (event) => {
  setInput(event.target.value);
}

const onButtonSubmit = () => {
  setImageUrl(input);
  setInput('');

const PAT = 'c774f189cd1c40e79058ab0edb0ce4e5';
const USER_ID = 'qaac6d6bfcd9';       
const APP_ID = 'FaceRecognitionBrain';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": input
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.text())
    .then((data) => {
    displayFaceBox(calculateFaceLocation(data));
    })
    .catch((error) => console.log('error', error));
};

const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
}, []);




  return (
    <>
    <div className='App'>

      <Particles  
        id="tsparticles" 
        className='particles' 
        init={particlesInit}
        options= {ParticleOptions}
        />

      
     <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      {route === 'home' 
      ? <div>
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={onInputChange} 
            onButtonSubmit={onButtonSubmit}
            input={input}
          />

          <FaceRecognition 
            imageUrl={imageUrl} 
            box={box}
          />
        </div>

        :(
          route === 'signin'
          ? <SignIn onRouteChange={onRouteChange}/>
          : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        )
      }
    </div>
    </>
  );
  }

export default App