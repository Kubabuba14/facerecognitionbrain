import './App.css';
import Navigation from './components/navigation/navigation';
import FaceRecognition from './components/facerecognition/facerecognition'
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import ParticleOptions from './components/Particles/ParticleOptions';


function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

const onInputChange = (event) => {
  setInput(event.target.value);
}

const onButtonSubmit = () => {
  setImageUrl(input);
  setInput('');

const PAT = 'e87bef42ee8844f79d91c73720573edb';
const USER_ID = 'qaac6d6bfcd9';       
const APP_ID = 'c774f189cd1c40e79058ab0edb0ce4e5';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  return (
    <>
    <div className='App'>

      <Particles  
        id="tsparticles" 
        className='particles' 
        init={particlesInit}
        loaded={particlesLoaded}
        options= {ParticleOptions}
        />

      <Navigation />
      <Logo />
      <Rank />

      <ImageLinkForm 
      onInputChange={onInputChange} 
      onButtonSubmit={onButtonSubmit}
      input={input}/>

      <FaceRecognition imageUrl={imageUrl}/>
    </div>
    </>
  );
}

export default App
