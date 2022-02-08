import React from 'react';
import styled from 'styled-components';

const Header = ({onClick}) => {
  return (
  <StyledContainer>
    <Title>Workout Tracker</Title>
    <Button onClick={onClick} >Add Workout</Button>
  </StyledContainer>
    );
};

const StyledContainer = styled.div`
    max-width:100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid grey;
    background-color: #0394fc;



`
const Title = styled.h1`
    font-size: 22px;

`

const Button = styled.button`
    border-radius: 20px;
    border: 1px solid black;
    padding: 0 15px;

`

export default Header;
