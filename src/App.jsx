import { useState } from 'react'
import './App.css'
import APIform from './components/APIform'

function App() {
  const ACCESS_KEY = import.meta.env.VITE_API_FLASH_KEY
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };
  }

  if (inputs.url == "" || inputs.url == " ") {
    alert("Please put valid url")
  }
  else {
    
  }

  return (
    <div className='whole-page'>
      <h1>Build Your Own Screenshot</h1>

      <APIform
        inputs={inputs}
        handleChange={(e) => 
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
        />
        <br></br>
    </div>
  )
}

export default App
