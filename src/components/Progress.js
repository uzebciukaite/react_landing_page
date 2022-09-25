import React from 'react'
import { Container, Image, ProgressBar } from 'react-bootstrap'


const Progress = () => {

    const items = [
        {name: "Web design", percent: 80},
        {name: "Development", percent: 60},
        {name: "Branding", percent: 40},
        {name: "Code", percent: 75},
    ]
  return (
    <Container id="qualifications" className="d-flex flex-column w-100 pt-5 ">
         <hr className='w-25' />
         <h2 className='w-75 mb-5'>Qualifications</h2>
       <Container className='w-100 h-100 position-relative d-flex align-items-center justify-content-end outerProgressCont'>
                <div className="d-flex flex-column h-100 p-5 justify-content-center gap-1 cusstomBoxStyle progressCont">
                    <h2>Some text</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem facere odio quos molestiae explicabo voluptates.</p>
           {items.map((x,i) => (
               <div> 
                   <div className="d-flex justify-content-between align-items-center " style={{width: `${x.percent + 5}%`}}>
                    <h4 className="smallBoldText">{x.name}</h4>
                    <p className="smallBoldText" >{x.percent}%</p>
                   </div>
                   
                    <ProgressBar className="bar" variant="danger" now={x.percent} />
               </div>
           ))}

       </div>
        <Image
        className="progressImg"
        src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        rounded
        ></Image>
        
       </Container>
       

    </Container>
  )
}

export default Progress