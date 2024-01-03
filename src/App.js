import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
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
      <div className="container" >
      <TextForm heading="Type here" mode={Mode} />
      </div>
    </>
  );
}

export default App;
