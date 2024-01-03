import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
function App() {
  const [Mode,setMode]=useState('light');

  const toggaleMode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      <Navbar title="Text Util" mode={Mode} toggaleMode={toggaleMode} />
      <div className="container">
      <TextForm heading="Type here" mode={Mode}/>
      </div>
    </>
  );
}

export default App;
