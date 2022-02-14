import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {IoReorderThreeOutline} from 'react-icons/io5'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const SideBar = () => {

    
  return (
    <SideBarContainer id='sidebar'>
      <Container>
        <Link to="/login" style={{ textDecoration: 'none' }} ><LoginButton>Login <BsFillPersonFill size={20}/></LoginButton></Link>
        <Nav>

        </Nav>
      </Container>
      
    </SideBarContainer>
  )
}
const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  left: -75vw;
  width: 72vw;
  height: 100vh;
  background-color:transparent;

`
const Container = styled.nav`

  transform: translateX(25px);
  padding: 5px;

`
const Nav = styled.nav`
  padding: 10px;


`
const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background: none;
  padding: 10px  20px;
  font-size: 15px;

`



export default SideBar