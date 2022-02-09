import React from 'react';
import styled from 'styled-components'
import {TiDelete} from 'react-icons/ti'

const WorkoutsContainer = ({workouts, deleteWorkout}) => {


  const today = new Date().toISOString().split('T')[0]

  const openModal = (e) => {
    e.target.nextSibling.style.display = 'block'
  }

  const closeModal = (e) => {
    e.target.parentElement.style.display = "none"
    e.target.parentElement.parentElement.style.display = "none"

  }

  return (
      <Container>
        <Title>Today's trainings</Title>
            {workouts.filter(workout => workout.date.split('T')[0] === today).map(filteredWorkouts => (
              <Workout key={filteredWorkouts._id} style={{display: 'flex', justifyContent: 'space-between'}} >
              <div onClick={openModal} >{filteredWorkouts.text}</div>
              <DetailsModal>
                 <ModalContent>
                  <TiDelete style={{width: '100%', justifySelf: "end"}} onClick={closeModal} size={25} color='red'/>
                   {filteredWorkouts.detail}
                  </ModalContent>
              </DetailsModal>
              <TiDelete onClick={() => deleteWorkout(filteredWorkouts._id)} size={25} color='red'/>
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
  justify-content: space-between;
  padding: 15px 5px;
  border-bottom: 1px solid grey;

`
const Title = styled.h1`
  font-size: 25px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;


`

const DetailsModal = styled.div`
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0, 0.2)

`

const ModalContent = styled.div`

  display: flex;
  gap: 10px;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fefefe;
  margin: 100% auto; 
  padding: 20px;
  padding-bottom: 40px;
  border: 1px solid #888;
  width: 80%;


`


export default WorkoutsContainer;
