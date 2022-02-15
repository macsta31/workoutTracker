import React from 'react';
import styled from 'styled-components'
import {TiDelete} from 'react-icons/ti'
import { useEffect, useState } from 'react';

const WorkoutsContainer = ({workouts, deleteWorkout, token}) => {

  const [date, setDate] = useState('')


  const openModal = async (e) => {
    if(e.target.nextSibling.nextSibling.style.display === "flex"){
      e.target.nextSibling.nextSibling.style.display = "none"
    }
    else{
      e.target.nextSibling.nextSibling.style.display = "flex";
         
    }
  }

  useEffect(() => {
    const today_ = new Date().toLocaleString("en-US", {timeZone: "America/New_York"}).split(',')[0].replaceAll('/', '-')
    let day = today_.split('-')[1]
    let month =today_.split('-')[0]
    let year = today_.split('-')[2]
    if(day.length === 1){
      day = `0${day}`
    }
    if(month.length ===1){
      month = `0${month}`
    }
    
    

    const today = `${year}-${month}-${day}`
    setDate(today)
  }, [])
  

  return (
      <Container>
        <Title>Today's trainings</Title>
            {workouts.filter(workout => workout.date.split('T')[0] === date).map(filteredWorkouts => (
              <Workout key={filteredWorkouts._id} style={{display: 'flex', justifyContent: 'space-between'}} >
              <WorkoutTitle onClick={openModal} >{filteredWorkouts.text}</WorkoutTitle>
              <TiDelete style={{flexBasis: '10%', alignSelf: 'right'}} onClick={() => deleteWorkout(filteredWorkouts._id)} size={25} color='red'/>
              <DetailsModal>
                 <ModalContent>
                   {filteredWorkouts.detail.split('\n').map(detail => (
                     <li key={Math.floor(Math.random()*10000)-1} >{detail}</li>
                   ))}
                  </ModalContent>
              </DetailsModal>
            </Workout>
            ))}      
      </Container>
      
      
  );
};

const Container = styled.div`
    display: flex;
    flex-direction:column;
    padding: 5px;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

`

const Workout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 5px;
  border-bottom: 1px solid grey;

`
const Title = styled.h1`
  font-size: 25px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;


`

const WorkoutTitle = styled.div`
  flex-basis: 50%

`

const DetailsModal = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

`

const ModalContent = styled.ul`

  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: decimal-leading-zero;


`


export default WorkoutsContainer;
