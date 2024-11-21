import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert= (message,type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert('DarkMode has been Enable','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('LightMode has been Enable','success');
    }

  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/About" element={<About mode={mode}/>}>
        
      </Route>
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} alert={alert} showAlert={showAlert}/>}>
      </Route>
    </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
