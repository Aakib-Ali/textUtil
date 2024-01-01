import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Convert Lower to Upper"/>
      <div className="container">
      <TextForm heading="Type here"/>
      </div>
    </>
  );
}

export default App;
