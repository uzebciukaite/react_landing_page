import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  return (
     <Container className="d-flex flex-column w-100 h-100 bg-light rounded my-auto  justify-content-center customForm"> 
          
            <h2 className='mx-3'>Want to work together?</h2>
            <h4 className='mx-3'>Contact us!</h4>
            <Form className="d-flex flex-column w-100 h-100 my-5 px-2">
            <Form.Group className="mb-3 wrapper" controlId="formBasicEmail">
              <Form.Label className="label bg-light">Name*</Form.Label>
              <Form.Control  className='input bg-light' type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3 wrapper" controlId="formBasicEmail">
              <Form.Label className="label bg-light ">Email*</Form.Label>
              <Form.Control className='input bg-light w-100' type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3 wrapper " controlId="formBasicEmail">
              <Form.Label className="label bg-light ">Message*</Form.Label>
              <Form.Control className='input bg-light' type="text" placeholder="Enter your question" />
            </Form.Group>
            <Container className='d-flex w-100 justify-content-end'>
              <Button  className="customBtnstyle btn-lg w-50 py-3"  variant="primary" type="submit">
              Contact us
            </Button>
            </Container>
            
          </Form>
        </Container>
  )
}

export default ContactForm