import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import ParticleOptions from './components/Particles/ParticleOptions';


function App() {

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
      
      <Particles  id="tsparticles" className='particles' 
            init={particlesInit}
            loaded={particlesLoaded}
            options= {ParticleOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {<FaceRecognition />} */}
    </div>

  

    

  
     </>
  );
}

export default App
