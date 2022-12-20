import React,{useState} from 'react'
import Employee from './Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'

function Add() {
  const history=useNavigate()
    // store
    const [uname,SetUname]=useState("")
    const [age,SetAge]=useState("")
    const [desg,SetDesg]=useState("")
    const [salary,SetSalary]=useState(0)

    const handleEmployee=(e)=>{
      e.preventDefault()
      let ids=uuid()
      let uniqueId=ids.slice(0,8)
      Employee.push({
        id:uniqueId,
        uname:uname,
        age:age,
        desg:desg,
        salary:salary
      })
      history('/')

}
  return (
    <div>
          <h1 className='text-primary text-center mt-3'>Add Employee Detailes</h1>
    <p className='ms-3 mt-2 text-dark'>
    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
    </p>
    <Row>
      <Col>
        <img style={{width:'500px',height:'500px'}} src={'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} alt={'Not found'}/>
      </Col>
      <Col>

      <Form className='border me-5'>
      <Form.Group className="mb-3 " >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" 
        onChange={(e)=>SetUname(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label>Age</Form.Label>
        <Form.Control  type="text" placeholder="Enter Age"
        onChange={(e)=>SetAge(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label>Designation</Form.Label>
        <Form.Control  type="text" placeholder="Enter Designation" 
        onChange={(e)=>SetDesg(e.target.value)}
        />
      </Form.Group>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" 
        onChange={(e)=>SetSalary(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit"
       onClick={(e)=>handleEmployee(e)}
      >
        Add 
      </Button>
    </Form>

      </Col>
    </Row>


    </div>
  )
}

export default Add