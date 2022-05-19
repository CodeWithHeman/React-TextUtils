import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);//alert is object
  const showAlert = (m, t) => {
    setAlert({
      msg: m,
      type: t
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode successfully applied', 'info')
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode successfully applied', 'success')
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
     <BrowserRouter>
        {/*
        To Pass props Components
        Props is read only propertise
        exact - basically match the path else its match patial
        */}

        <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />          
            <Routes>
              <Route exact path="/about" element={<About mode={Mode} />} />
              <Route path="/" element={<TextForm showAlert={showAlert} mode={Mode} heading="Enter you text to analyse below" />} />
            </Routes>         
        </div>
        </BrowserRouter>
    </>

  );
}

export default App;
