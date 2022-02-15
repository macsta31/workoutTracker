import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import TrainingSaver from './Routes/TrainingSaver';
import Starter from './Routes/Starter';
import Login from './Routes/Login';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';



function App() {

  const navigate = useNavigate()

  const toHome = useRef(null)

  const [token, setToken] = useState(window.sessionStorage.getItem('token'))

  const postLogin = async(formBody) => {
    await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("token", data.token)
      sessionStorage.setItem('name', data.name)
      setToken(data.token)
    })
    .catch((err) => console.log(err))
  }

  const loginUser = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    var details = {
      'email': email,
      'password': password
    }

    var formBody = []
    for (var property in details) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(details[property])
      formBody.push(encodedKey+"="+encodedValue)
    }
    formBody = formBody.join("&")
    await postLogin(formBody)

    navigate('/')



  }
  const postRegister = async (formBody) => {
    await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("token", data.token)
      sessionStorage.setItem('name', data.name)
      setToken(data.token)
    })
    .catch((err) => console.log(err))
  
  }

  const registerUser = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    var details = {
      'name': username,
      'email': email,
      'password': password
    }

    var formBody = []
    for (var property in details) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(details[property])
      formBody.push(encodedKey+"="+encodedValue)
    }
    formBody = formBody.join("&")

    await postRegister(formBody)
    
    navigate('/')

  }
  



  return (
    
      <Routes>
        <Route path="/" element={<TrainingSaver token={token} />} />
        <Route path="starter" element={<Starter />} />
        <Route path="login" element={<Login onLogin={(e) => loginUser(e)} token={token} onRegister={(e) => registerUser(e)} />} />
        
      </Routes>
      // <Link to="/" ref={toHome} />
    
  );
}



export default App;
