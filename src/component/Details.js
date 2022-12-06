import React, { useEffect, useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './Details.css';
import { Container } from 'react-bootstrap';
import Review from './Review';


function Details() {
  const [restaurant, setRestuarant] = useState([])
  const params = useParams();

  const fetchData = async () => {
    await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((data) => setRestuarant(data.restaurants))

  }

  useEffect(() => {
    fetchData()
  }, [])

  const details = restaurant.find((i) => i.id == params.id);
  console.log("details", details);

  return (
    <div style={{ marginTop: '35px' }}>
      {details ? (
        <Container>
          <Row className='c' >

            <Col lg={4}  >
              <Image className="image" src={details.photograph} style={{ marginTop: '40px' }} fluid />
            </Col>
            <Col lg={4} style={{ marginTop: '200px' }} className=''>
              <h1 className='fw-bold '>{details.name}</h1>
              <h5 className='mb-4'>{details.neighborhood}</h5>
              <h4>Cuisine: {details.cuisine_type}</h4>
              <h5 className='mt-3 mb-3 '>Address: {details.address}</h5>
              
            </Col>
            <Col  lg={4} style={{ marginTop: '100px' }} >
            <div className=' py-5 ps-5 pe-2 shadow '  >
                <h6 className='fw-bold'>Working Time:</h6>
                <p>Monday: {details.operating_hours.Monday}</p>
                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                <p>Thursday: {details.operating_hours.Thursday}</p>
                <p>Friday: {details.operating_hours.Friday}</p>
                <p>Saturday: {details.operating_hours.Saturday}</p>
                <p>Sunday: {details.operating_hours.Sunday}</p>
              </div>

            </Col>

            <Row className=' mt-5 mb-5'>
              <div className='shadow p-4 mt-5 mb-5 bg-white'>
                <Review data={details.reviews} />
              </div>
            </Row>

          </Row>
        </Container>
      ) : null

      }
    </div>
  )
}

export default Details
