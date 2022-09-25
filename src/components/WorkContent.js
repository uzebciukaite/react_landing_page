import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

const WorkContent = () => {


 const images = [
    {
        image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/6372/coffee-smartphone-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/7310202/pexels-photo-7310202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/164645/pexels-photo-164645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/1470167/pexels-photo-1470167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        image: "https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
 ]
  return (
    <Container id="ourwork" className=" d-flex flex-column w-100 h-75vh m-50 pt-5" >
        <hr className='w-25 my-4' />
        <h2 className='w-25 mb-5'>Our works</h2>
        
         <Row xs={1} md={2} lg={3} className="gap" >  
         {images.map((x,i)=> (
        <Col className=' mb-4 imgWrapper'> 
            <Image src={x.image} className="w-100 h-100 workImage" responsive />
            <Container className='imgContent'>Something written here</Container>
        
   
        </Col>
         ))}
         
         </Row>
    </Container>
  )
}

export default WorkContent