import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert'

// thi is react router part start
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// --------------------------end 

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] = useState(null);


  let toggleMode = () =>{
    if (mode === "light") {

      setmode('dark');
      document.body.style.backgroundColor = '#341c3d';
      AlertFunction('dark mode has been enabled ' , 'success !!')
      

    }else{

      setmode('light');
      document.body.style.backgroundColor = 'white';
      AlertFunction('light mode has been enabled ' , 'success !!')

    }
  }



  let AlertFunction = (message ,type) => {
    setAlert({
      msg : message ,
      type : type,

    })
    setTimeout(()=>{
      setAlert(null);
      
    },3000)
  }


  return (
    <>
      <Navbar title="Rakeshraj" mode = {mode} toggleMode = {toggleMode}></Navbar>
      <Alert alert= {alert}  /> 
      <div className="container my-3">
      {/* <TextForm heading="Enter text to analyze" mode = {mode}></TextForm> */}
      <Routes>
        <Route path="about" element={<About />} />        
        <Route path="/" element={ <TextForm heading="Enter text to analyze" mode = {mode}></TextForm>} />        
      </Routes>

       
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
