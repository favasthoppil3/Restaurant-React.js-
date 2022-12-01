import React, { useEffect, useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './Details.css';
import { Container } from 'react-bootstrap';


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
        <Row className='' >
         
            <Col lg={4}  >
              <Image className="image" src={details.photograph} style={{ marginTop: '40px' }} fluid />
            </Col>
            <Col lg={6} style={{ marginTop: '70px' }}>
              <h1 className='fw-bold'>{details.name}</h1>
              <h5 className='mb-4'>{details.neighborhood}</h5>
              <h4>Cuisine: {details.cuisine_type}</h4>
              <h5 className='mt-3 mb-3 '>Address: {details.address}</h5>
              <div className=' ps-5 pt-3'>
                <h6 className='fw-bold'>Working Time:</h6>
                <p>Monday: {details.operating_hours.Monday}</p>
                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                <p>Thursday: {details.operating_hours.Thursday}</p>
                <p>Friday: {details.operating_hours.Friday}</p>
                <p>Saturday: {details.operating_hours.Saturday}</p>
                <p>Sunday: {details.operating_hours.Sunday}</p>
              </div>

              <div>
                <h4 className='fw-bold'>Review:</h4>
                <p>{details.reviews.name}</p>
              </div>
            </Col>

        </Row>
        </Container>
      ) : null

      }
    </div>
  )
}

export default Details
