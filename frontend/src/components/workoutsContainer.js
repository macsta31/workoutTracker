import React from 'react';
import styled from 'styled-components'
import {TiDelete} from 'react-icons/ti'

const WorkoutsContainer = ({workouts, deleteWorkout}) => {


  const today = new Date().toISOString().split('T')[0]

  const openModal = async (e) => {
    console.log(e)
    if(e.target.nextSibling.nextSibling.style.display === "flex"){
      e.target.nextSibling.nextSibling.style.display = "none"
    }
    else{
      e.target.nextSibling.nextSibling.style.transform = 'translateX -200px'
      e.target.nextSibling.nextSibling.style.transition = 'transform 2s'
      e.target.nextSibling.nextSibling.style.transform = 'translateX 200px'
      e.target.nextSibling.nextSibling.style.display = "flex";
         
    }
  }

  return (
      <Container>
        <Title>Today's trainings</Title>
            {workouts.filter(workout => workout.date.split('T')[0] === today).map(filteredWorkouts => (
              <Workout key={filteredWorkouts._id} style={{display: 'flex', justifyContent: 'space-between'}} >
              <WorkoutTitle onClick={openModal} >{filteredWorkouts.text}</WorkoutTitle>
              <TiDelete style={{flexBasis: '10%', alignSelf: 'right'}} onClick={() => deleteWorkout(filteredWorkouts._id)} size={25} color='red'/>
              <DetailsModal>
                 <ModalContent>
                   {filteredWorkouts.detail}
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
  // transition: transform 2s;
  // transform: translateX(-200px)
  // transform: translateX(200px)


`

const ModalContent = styled.div`

  display: flex;
  padding: 30px;


`


export default WorkoutsContainer;
