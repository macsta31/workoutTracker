import React from 'react';
import styled from 'styled-components';
import { IoReorderThreeOutline } from 'react-icons/io5'
import { useState } from 'react';

const Header = ({onClick, button, paddingLeft}) => {

  const [sideBar, setSideBar] = useState(false)

    const styleSideBar = (e) => {
        if(!sideBar){
            document.getElementById('sidebarIcon').style.transition = '1s all'
            document.getElementById('sidebarIcon').style.transform = 'rotate(90deg)'
            document.getElementById('sidebar').style.transition = '1s all'
            document.getElementById('icon').style.transition = '1s all'
            document.getElementById('sidebar').style.backgroundColor = 'rgba(250, 250, 250, 0.95)'
            document.getElementById('sidebar').style.transform = 'translateX(75vw)'
            document.getElementById('icon').style.transform = 'translateX(65vw)'
            setSideBar(true)
        }
        else{
            document.getElementById('sidebarIcon').style.transition = '1s all'
            document.getElementById('sidebarIcon').style.transform = 'rotate(0deg)'
            document.getElementById('sidebar').style.transition = '1s all'
            document.getElementById('icon').style.transition = '1s all'
            document.getElementById('sidebar').style.backgroundColor = 'transparent'
            document.getElementById('sidebar').style.transform = 'translateX(0vw)'
            document.getElementById('icon').style.transform = 'translateX(0vw)'
            setSideBar(false)
        }
        }

  return (
  <StyledContainer>
    <IconContainer id='icon'><IoReorderThreeOutline id='sidebarIcon' onClick={styleSideBar} size={30} /></IconContainer> 
    <Title style={{paddingLeft: paddingLeft}}>Workout Tracker</Title>
    {button && <Button onClick={onClick} >Add Workout</Button>}
  </StyledContainer>
    );
};

const StyledContainer = styled.div`
    max-width:100%;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    gap: 10px;
    align-items:center;
    // padding: 20px;
    border-bottom: 1px solid grey;
    background-color: #0394fc;



`
const Title = styled.h1`
    font-size: 22px;

`

const Button = styled.button`
    height: min-content;
    border-radius: 20px;
    border: none;
    padding: 12px 12px;
    font-size: 15px;

`
const IconContainer = styled.div`
height: min-content;
  &:hover {
    transition: all 2s;
    transform: rotate 90deg;
  }

`

export default Header;
