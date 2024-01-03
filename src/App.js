import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  const showAlert = (message,type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const toggaleMode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert(" : Dark mode is enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" : Dark mode is desabled","success");
    }
  }

  return (
    <>
      <Navbar title="Text Util" mode={Mode} toggaleMode={toggaleMode} />
      <Alert alert={alert} />
      {/* <div className="container" >
          <TextForm heading="Type here" mode={Mode} />
      </div>
          <About/> */}

      <Routes>
        <Route exact path='/' element={<div className="container" >
          <TextForm heading="Type here" mode={Mode} />
      </div>} />
      <Route exact path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
