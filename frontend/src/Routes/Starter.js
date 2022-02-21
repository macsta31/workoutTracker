import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import onyourmarks from '/Users/mack/Desktop/workoutTracker/frontend/src/audio/onyourmarks.mp3'
import set from '/Users/mack/Desktop/workoutTracker/frontend/src/audio/set.mp3'
import bang from '/Users/mack/Desktop/workoutTracker/frontend/src/audio/bang.mp3'





const Starter = () => {

    let audio = new Audio('/Users/mack/Desktop/workoutTracker/frontend/src/audio/onyourmarks.mp3')

    const startSequence = () => {
        audio.play()
        .then(() => {

        })
        .catch((error) => {
            console.log(error)
        })
    }

    
    
  return (
    <div>
        <Header title={'Track Gun'} />
        <Container>
            <Button onClick={startSequence}>Start</Button>
        </Container>
    </div>  
);
};

const Container = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 80vh;
    min-width: 100vw;


`
const Button = styled.button`

    border: none;
    padding: 30px 60px;
    border-radius: 50px;
    background-color:#0394fc;
    font-size: 30px;


`
const Title = styled.h1`

    font-size: 30px;

`

export default Starter;
