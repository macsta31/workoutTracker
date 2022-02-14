import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Login = ({onLogin, onRegister}) => {
    
    const [login, setLogin] = useState(false)
  return (
    <Screen>
        
        <Header />
        {!login ?
        <Container>
            
            <Title>Register</Title>
            <LoginForm onSubmit={onRegister}>
                <FormControl>
                    <Label>Username</Label>
                    <Input></Input>
                </FormControl>
                <FormControl>
                    <Label>Email</Label>
                    <Input></Input>
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <Input></Input>
                </FormControl>
                <SubmitButton>Sign Up</SubmitButton>
            </LoginForm>
            <p onClick={() => setLogin(true)} style={{borderBottom: '1px solid black'}}>Already have an account? Login!</p>
        </Container>
            :
        <Container>
            
            <Title>Login</Title>
            <LoginForm onSubmit={onLogin}>
                <FormControl>
                    <Label>Email</Label>
                    <Input></Input>
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <Input></Input>
                </FormControl>
                <SubmitButton type='submit'>Login</SubmitButton>
            </LoginForm>
            <p onClick={() => setLogin(false)} style={{borderBottom: '1px solid black'}}>New here? Signup!</p>
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

export default Login