import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Nav() {
  return (
    <div>
           <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6AhXh5vX82Upb49in7pZH2iEKd-xxAEkTg&usqp=CAU"
                width="50"
                height="50"
                className=" align-top"
              />{'     '}
              <span>Employee Management</span>
            </Navbar.Brand>
          </Container>
        </Navbar> 

</div>
  )
}

export default Nav