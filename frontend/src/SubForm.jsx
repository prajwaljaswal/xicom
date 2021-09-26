import React from 'react'
import {Button , Form} from 'react-bootstrap'
import {useFieldArray} from 'react-hook-form'

function SubForm(props) {
    const {register , control } = props
    const {append , fields , remove} = useFieldArray({
        control,
        name:"tickets"
    })
    return (
        <div>
           {
               fields.map((val,index)=>{
                   return(
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>ID</Form.Label>
                      <Form.Control type="text"  name = {`tickets[${index}.ids]`}  {...register(`tickets[${index}.ids]`) } defaultValue = {val.ids}/>
                    </Form.Group>
                  
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Ticket No.</Form.Label>
                      <Form.Control type="text" name = {`tickets[${index}.ticket]`}  {...register(`tickets[${index}.ticket]`)} defaultValue = {val.ticket}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text"  name = {`tickets[${index}.price]`}  {...register(`tickets[${index}.price]`)} defaultValue = {val.price}/>
                    </Form.Group>
                    
                  
                    <Button className = "btn btn-danger" onClick = {()=>remove(index)}>Remove</Button>   
                  </Form> 
                  
                   )
               })
           } 
           
           <Button className = "btn btn-primary " onClick = {()=>append({ids:"" , ticket:"" , price:""})}>Add ticket</Button>
           
        </div>
    )
}

export default SubForm
