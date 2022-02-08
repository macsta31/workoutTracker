import { useEffect, useState } from "react"
import WorkoutsContainer from "./components/workoutsContainer"
import Header from "./components/Header"
import styled from "styled-components"
import Form from "./components/AddForm"
import AddForm from "./components/AddForm"


function App() {

  const [workouts, setWorkouts] = useState([])
  const [formState, setFormState] = useState(true)

  const workoutsFromDB = () => {
    fetch('http://localhost:5000/api/workouts/')
      .then((response) => response.json())
      .then((responseJson => {
        setWorkouts(responseJson)
      }))
  }

  const postToDB = async (formBody) => {
    const response = await fetch('http://localhost:5000/api/workouts/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody
    })
  }

  const postWorkout = async (text) => {

    var details = {
      'text': text
    }

    var formBody = []
    for (var property in details) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(details[property])
      formBody.push(encodedKey+"="+encodedValue)
    }
    formBody = formBody.join("&")

    await postToDB(formBody)

    workoutsFromDB(); 

    

  }

  const removeFromDB = async (id) => {
    const response = await fetch(`http://localhost:5000/api/workouts/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    })
  }


  const deleteWorkout = async (id) => {
    await removeFromDB(id)
    workoutsFromDB()

  }

  useEffect(() => {
    workoutsFromDB()
  }, [])

  const addForm = () => {
    setFormState(!formState)
  }

  const submitTraining = async (e) => {
    e.preventDefault();
    await postWorkout(e.target.form[0].value)
  }



  return (
    <>
      <Header onClick={addForm}/>
      <StyledContainer>
        <WorkoutsContainer workouts={workouts} deleteWorkout={deleteWorkout} postWorkout={postWorkout}/>
        {formState && 
          <AddForm onClick={(e) => submitTraining(e)}/>
        }
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  self-align: center;
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 30px;

`

export default App;
