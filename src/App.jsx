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
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'c774f189cd1c40e79058ab0edb0ce4e5'
})


function App() {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

const onInputChange = (event) => {
  setInput(event.target.value);
}

const onButtonSubmit = () => {
  setImageUrl(input);

  app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
  .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  .catch(err => console.log(err));
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
        options= {ParticleOptions}/>

      <Navigation />
      <Logo />
      <Rank />

      <ImageLinkForm 
      onInputChange={onInputChange} 
      onButtonSubmit={onButtonSubmit}/>

      <FaceRecognition imageUrl={imageUrl}/>
    </div>
    </>
  );
}


export default App
