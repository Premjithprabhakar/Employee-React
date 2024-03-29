import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
function Home() {
  const history=useNavigate()
  const handleDelete=(id)=>{
  let index=Employee.map((item)=>item.id).indexOf(id)
  Employee.splice(index,1)
  history('/')
}

  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",age)
    localStorage.setItem("desg",desg)
    localStorage.setItem("salary",JSON.stringify(salary))

  }
  return (
    <>
    <h1 className='text-primary text-center mt-3'>Employee Management System</h1>
    <p className='ms-3 mt-2 text-dark'>
    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
    </p>

<Link to={'/add'}>
          <button className='btn btn-success'>Add Employee</button>

</Link>
<div style={{margin:"3rem"}}>
        <h2>List of all employee</h2>
            <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
                <th>Designation </th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
               Employee && Employee.length > 0?
               Employee.map((item)=>(
                <tr>
                    <td>{item.uname}</td>
                    <td>{item.age}</td>
                    <td>{item.desg}</td>
                    <td>{item.salary}</td>
                    <td>
        <Link to={'./edit'}>
          <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} variant="primary">Edit</Button> &nbsp;
        </Link>  
             <Button onClick={()=>handleDelete(item.id)} variant="danger">Delete</Button>
                </td>
                </tr>
               ))
               :"no table data avilable"
            }
          </tbody>
        </Table>

</div>      
</>
  )
}

export default Home