import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Login = ({onLogin, onRegister, token}) => {
const navigate = useNavigate()
    
    
    const [login, setLogin] = useState(true)

    const changeToRegister = () => {
        
        document.getElementById('usernameRegister').value = ''
        document.getElementById('emailRegister').value = ''
        setLogin(true)
    }

    useEffect(() => {
        if(window.sessionStorage.getItem('token')) {
            navigate(`/`)
        }
    }, [])

    const changeToLogin = () => {
        
        document.getElementById('emailLogin').value = ''
        document.getElementById('passwordLogin').value = ''
        setLogin(false)
    }

  return (
    <Screen>
        <SideBar token={token} />
        <Header />
        {!login ?
        <Container>
            
            <Title>Register</Title>
            <LoginForm onSubmit={onRegister} autoComplete="off">
                <FormControl>
                    <Label>Username</Label>
                    <Input id="usernameRegister"></Input>
                </FormControl>
                <FormControl>
                    <Label>Email</Label>
                    <Input type='email' id="emailRegister" ></Input>
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <Input type='password' name="password" autoComplete='on' id='passwordRegister'></Input>
                </FormControl>
                <SubmitButton>Sign Up</SubmitButton>
            </LoginForm>
            <P onClick={changeToRegister} style={{borderBottom: '1px solid black'}}>Already have an account? Login!</P>
            
        </Container>
            :
        <Container>
            
            <Title>Login</Title>
            <LoginForm onSubmit={onLogin} autoComplete='off'>
                <FormControl>
                    <Label>Email</Label>
                    <Input type='email' name="password" id='emailLogin' ></Input>
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <Input type='password' name='password' id='passwordLogin' autoComplete='on'></Input>
                </FormControl>
                <SubmitButton type='submit'>Login</SubmitButton>
            </LoginForm>
            <P onClick={changeToLogin} style={{borderBottom: '1px solid black'}}>New here? Signup!</P>
        </Container>}
        
    </Screen>
  )
}

const Screen = styled.div`

`

const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const LoginForm = styled.form`
    display:flex;
    flex-direction: column;
    gap: 20px;

`
const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80vw;

`
const Label = styled.label`


`
const Input = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;

`
const SubmitButton = styled.button`
    background: none;
    border: 1px solid black;
    padding: 10px;
    border-radius: 8px;
    background-color:#0394fc;
    font-size: 20px;
    color: white;

`
const Title = styled.h1`
    padding-bottom: 15px;
    border-bottom: 1px solid black;

`
const P = styled.p`
    &:hover{
        cursor: pointer
    }

`

export default Login