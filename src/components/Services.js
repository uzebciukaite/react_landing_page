import React from 'react'
import { Container } from 'react-bootstrap'

import Row from 'react-bootstrap/Row';

import SingleBox from './SingleBox'

const Services = () => {


    const serviceArr = []
    const serviceName = ["Web Design", "Development", "Branding", "Web Design", "Development", "Branding"]
    const images = [
      "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7310202/pexels-photo-7310202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/1181282/pexels-photo-1181282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos neque?"

    for(let i = 0; i < serviceName.length; i++){
        
            serviceArr[i] = {
                name: serviceName[i],
                image: images[i],
                text: text
            }
    }

  return (
    <Container id="services" className="d-flex flex-column w-100 h-75vh pt-5 " >
        <hr className='w-25' />
       <h2 className='w-75 mb-5'>Services</h2>
       
     <Container className="d-flex w-100 align-items-center justify-content-center my-5">  
        <Row xs={1} md={2} lg={3}className="w-100 ">   
     {serviceArr.map((x,i) => <SingleBox service={x} key={i}/> )}
     </Row>
     </Container>
     
    </Container>

  )
}

export default Services