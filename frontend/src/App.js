import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrainingSaver from './Routes/TrainingSaver';
import Starter from './Routes/Starter';
import Login from './Routes/Login';



function App() {

  const loginUser = (e) => {
    console.log(e)
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
    .then(data => console.log(data));
    
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

  }
  



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainingSaver />} />
        <Route path="starter" element={<Starter />} />
        <Route path="login" element={<Login onLogin={(e) => loginUser(e)} onRegister={(e) => registerUser(e)} />} />
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;
