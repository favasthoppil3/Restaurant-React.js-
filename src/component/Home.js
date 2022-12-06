import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Row, Col } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import {listRestaurants} from '../action/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'
import "../../src/App.css";
import Footer from "./Footer";

function Home() {
  // const [restuarant, setRestuarant] = useState([]);

  const dispatch=useDispatch()
  const data=useSelector(state=>state.restaurantList)
  const {restaurant}=data



  // const fetchData = async () => {
  //   await fetch("./restaurants.json")
  //     .then((res) => res.json())
  //     .then((data) => setRestuarant(data.restaurants));
  // };

  useEffect(() => {
    // fetchData();
    dispatch(listRestaurants())
  }, []);
  console.log(data);

 

  return (
    <div>
      <div className="HomePage "></div>
    <Container>
      <Row>
        {restaurant
          ? restaurant.restaurants.map((item) => (
              <Col sm={12} md={6} lg={3}>
                <RestaurantCard restuarantData={item} />
              </Col>
            ))
          : null}
      </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
