import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaClock } from 'react-icons/fa';
import ContactForm from './ContactForm';


const Contacts = () => {

   const contacts = [
        {
            icon:  FaMapMarkerAlt,
            title: "Office",
            text: "Some street, some city"
        },
        {
            icon:  FaPhone,
            title: "Phone",
            text: "+12 3456 789"
        },
        {
            icon:  FaEnvelopeOpen,
            title: "Email",
            text: "some@email.com"
        }
    ]

  return (
    <Container id="contacts" className='d-flex flex-column w-100 h-75vh pb-5 pt-5'>
          <hr className='w-25' />
         <h2 className='w-75 mb-5'>Contacts</h2>
       <Container className='w-100 d-flex contactsMedia '>
        <ContactForm/>
         <Row xs={1} md={1} lg={1} className="w-100 d-flex justify-content-center align-items-center">  
        
            {contacts.map((x, i ) => {
                const Icon = x.icon
                
                return (
                    <Col>
                <Container className='d-flex position-relative flex-column justify-content-center align-items-center contactBox gap-3 text-center bg-light w-50 rounded'>
                    <Container className='text-center iconWrapper '> 
                        <Icon className='m-auto icon' /> 
                    </Container>
                    
                    <h4 className='mt-5 w-75'>{x.title}</h4>
                    <p>{x.text}</p>

                </Container>
                </Col>
            )
            }
            
            
            )}
       
        </Row>
       </Container>

    </Container>

  )
}

export default Contacts