import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';


const AddForm = ({onClick, onSubmit}) => {


  return (
  <StyledForm onSubmit={(e) => onSubmit(e)}>
      <h1 style={{fontSize: '25px', borderBottom: '1px solid black', paddingBottom: '10px'}}>New Training</h1>
      <FormControl>
        <Label>Training Title</Label>
        <Input placeholder='High Jump' ></Input>
        <Label>Date</Label>
        <Input type="date"></Input>
        <Submit onClick={(e) => onClick(e)}>Save Training</Submit>
      </FormControl>

  </StyledForm>
    );
};

const StyledForm = styled.form`

  width: 100%;

`

const Input = styled.input`

  padding: 10px;
  font-size: 15px;

`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;


`
const Submit = styled.button`
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  border:none;
  font-size: 15px;
  background-color: #0394fc;

`
const Label = styled.label`


`

export default AddForm;
