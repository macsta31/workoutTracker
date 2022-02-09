import React from 'react';
import styled from 'styled-components'
import {TiDelete} from 'react-icons/ti'

const WorkoutsContainer = ({workouts, deleteWorkout, postWorkout}) => {
  return (
      <Container>
        <>
            {workouts.map(workout => (
            <Workout key={workout._id} style={{display: 'flex', justifyContent: 'space-between'}} >
              <>{workout.text}</>
              <TiDelete onClick={() => deleteWorkout(workout._id)} size={25} color='red'/>
            </Workout>
          ))}
        </>
        {/* <button style={{marginTop: '10px'}} onClick={() => postWorkout('run')}>submit</button> */}
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



export default WorkoutsContainer;
