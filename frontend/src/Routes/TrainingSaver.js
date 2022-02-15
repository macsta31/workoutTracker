import React from 'react';
import Header from '../components/Header';
import AddForm from '../components/AddForm';
import SideBar from '../components/SideBar';
import WorkoutsContainer from '../components/workoutsContainer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


const TrainingSaver = ({ token }) => {
  

  const [workouts, setWorkouts] = useState([])
  const [formState, setFormState] = useState(true)

  const workoutsFromDB = async () => {
    await fetch('http://localhost:5000/api/workouts/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
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
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody
    })
  }

  const postWorkout = async (text, date, detail) => {

    var details = {
      'text': text,
      'date': date,
      'detail': detail
    }

    var formBody = []
    for (var property in details) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(details[property])
      formBody.push(encodedKey+"="+encodedValue)
    }
    formBody = formBody.join("&")

    await postToDB(formBody)

    await workoutsFromDB(); 
    

  }

  const removeFromDB = async (id) => {
    const response = await fetch(`http://localhost:5000/api/workouts/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      method: 'DELETE',
      mode: 'cors',
    })
  }


  const deleteWorkout = async (id) => {
    await removeFromDB(id)
    workoutsFromDB()

  }

  useEffect(() => {
    if(window.sessionStorage.getItem('token')){
    workoutsFromDB()
    }
  }, [])

  const addForm = () => {
    setFormState(!formState)
  }

  const submitTraining = async (e) => {
    e.preventDefault();
    if(!e.target.form[0].value || !e.target.form[1].value){
      if(!e.target.form[0].value){
      e.target.form[0].style.border = '1px solid red'
      }
      if(!e.target.form[1].value){
        e.target.form[1].style.border = '1px solid red'
      }
      throw new Error('fill out required fields')  
    }
    

    await postWorkout(e.target.form[0].value, e.target.form[1].value, e.target.form[2].value)
    e.target.form[0].value = ''
    e.target.form[1].value = ''
    e.target.form[2].value = ''

  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  

  
  return (
  <PageContainer>
    <SideBar token={token} />
    <div>
      <Header onClick={addForm} button={true} paddingLeft={'40px'}/>
        <StyledContainer>
        {formState && 
            <AddForm onClick={(e) => submitTraining(e)} onSubmit={(e) => onSubmit(e)}/>
          }
          <WorkoutsContainer workouts={workouts} deleteWorkout={deleteWorkout} postWorkout={postWorkout} token={token}/>
          
        </StyledContainer>
    </div>
  </PageContainer>
    );  
};

const StyledContainer = styled.div`
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 30px;
`

const PageContainer = styled.div`

`





export default TrainingSaver;
