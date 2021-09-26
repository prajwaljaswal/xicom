import {React , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button , Form} from 'react-bootstrap'
import{useForm , register  , handleSubmit , useFieldArray} from 'react-hook-form'
import SubForm from './SubForm';

function Main() {
 
     const {register , handleSubmit , control} = useForm({
       defaultValues:{
         eventName:"",
         eventDescription:"",
         startDate:"",
         endDate:"",
         organizer:"",
         
       }
     })

     

    //  const {append , remove , fields} = useFieldArray()
     const submit = (e)=>{
          console.log(e)
          // axios.post("http://localhost:4000/ticket" , info).then((e)=>{
          //   console.log(e)
          // })
          
     }
  return (
        <div>
       <Form onSubmit = {handleSubmit(submit)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Event Name</Form.Label>
    <Form.Control type="text"  name = "eventName"  {...register("eventName")}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Event Description</Form.Label>
    <Form.Control type="text" name = "eventDescription"  {...register("eventDescription")}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Start Date</Form.Label>
    <Form.Control type="date"  name = "startDate"  {...register("startDate")}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>End Date</Form.Label>
    <Form.Control type="date" name = "endDate"  {...register("endDate")} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Organizer</Form.Label>
    <Form.Control type="text" name = "organizer"  {...register("organizer")} />
  </Form.Group>

  <SubForm register = {register} control = {control}/>
     <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Main
