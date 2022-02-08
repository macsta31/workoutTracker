import { useEffect, useState } from "react"


function App() {

  const [workouts, setWorkouts] = useState([])

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
    console.log(response)
  }


  const deleteWorkout = async (id) => {
    await removeFromDB(id)
    workoutsFromDB()

  }

  useEffect(() => {
    workoutsFromDB()
  }, [])



  return (
    <>
      {workouts.map(workout => (
        <div key={workout._id} style={{color: 'black', display: 'flex', gap: '10px'}}>
          <>{workout.text}</>
          <button onClick={() => deleteWorkout(workout._id)} >delete</button>
        </div>
      ))}
      <button style={{marginTop: '10px'}} onClick={() => postWorkout('run')}>submit</button>

    </>
  );
}

export default App;
