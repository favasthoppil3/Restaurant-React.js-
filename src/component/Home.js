import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Row, Col } from "react-bootstrap";
import { Container } from 'react-bootstrap';


import "../../src/App.css";
import Footer from "./Footer";

function Home() {
  const [restuarant, setRestuarant] = useState([]);


  const fetchData = async () => {
    await fetch("./restaurants.json")
      .then((res) => res.json())
      .then((data) => setRestuarant(data.restaurants));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(restuarant);

 

  return (
    <div>
      <div className="HomePage "></div>
    <Container>
      <Row>
        {restuarant
          ? restuarant.map((item) => (
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
