
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled ! ", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled ! ", "success");
    }

  }
  return (
    <>
      <BrowserRouter>

        <Navbar title="TextUtils" abouttext="About TextUtils " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>
            <Route path="/about" element={<About mode={mode}/>} ></Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below ." mode={mode} />}></Route>
          </Routes>

        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
