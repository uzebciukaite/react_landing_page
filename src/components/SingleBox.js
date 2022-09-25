import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import {Card} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const SingleBox = ({service}) => {
  return (
      <Col>
     <Card className="customCard w-100 mb-5 m-auto cusstomBoxStyle">
      <Card.Img src={service.image}/>  
      <Card.Body className="my-4">
        <Card.Title className='font-weight-bold'>{service.name}</Card.Title>
        <Card.Text >
          {service.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default SingleBox