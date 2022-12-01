import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { Container } from 'react-bootstrap';



import './Header.css';
import { TextRight } from 'react-bootstrap-icons';


function RestaurantCard(props) {
    return (
       
        <div className=' rounded' id='Main' >
                <Card className='mt-5 border-0 shadow card p-2  ' id='Card' style={{}}>
                    <Link to={`restaurant/details/${props.restuarantData.id}`} >
                        <Card.Img variant="top" src={props.restuarantData.photograph} style={{}} fluid />
                    </Link>
                    <Card.Body>
                        <Card.Title>
                            <h4><strong>{props.restuarantData.name}</strong></h4></Card.Title>
                        <Card.Text>
                            <p>Cuisine: {props.restuarantData.cuisine_type}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>Location: {props.restuarantData.neighborhood}</p>
                        </Card.Text>
                        <div className='icon'>
                            <BsHeart className='fs-5'   />
                        </div>
                    </Card.Body>
                </Card>
        </div>
       
    )
}


export default RestaurantCard
