import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import ContactForm from './ContactForm'

const Main = () => {
  return (
    <Container id="home" className="d-flex w-100 h-100 main pt-5">
        <Container className="d-flex flex-column justify-content-center mr-4 w-60 gap-3">
          <h4 className='fs-2 font-weight-bold'>landing page</h4>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus, ducimus quas consequuntur.</p>
          <div className="d-flex gap-4 buttons">
            <Button className="w-25 py-2 customBtnstyle">Discover</Button>
            <Button className="w-25 py-2 customBtnstyle">Sign Up</Button>
          </div>
          
        </Container>

        <Container className='d-flex flex-column w-100 h-75 my-auto'>
        <ContactForm/>
        </Container>
        
        
    </Container>
  )
}

export default Main