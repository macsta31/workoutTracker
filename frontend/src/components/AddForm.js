import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';


const AddForm = ({onClick, onSubmit}) => {


  return (
  <StyledForm onSubmit={(e) => onSubmit(e)}>
      <h1 style={{fontSize: '25px', borderBottom: '1px solid black', paddingBottom: '10px'}}>New Training</h1>
      <FormControl>
        <label>Training Title *</label>
        <Input id='titleInput' placeholder='High Jump' ></Input>
        <label>Date *</label>
        <Input autoComplete='off' id='dateInput' title='date' type="date"></Input>
        <label id='detailsInput'  >Details</label>
        <TextArea rows={8} ></TextArea>
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
  &:focus {
    border: 1px solid black
  }

`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;


`
const Submit = styled.button`
  color: black; 
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  border:none;
  font-size: 15px;
  background-color: #0394fc;

`
const Label = styled.label`


`

const TextArea = styled.textarea`
  padding: 10px;



`

export default AddForm;
