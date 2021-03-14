import homepage1 from "../assets/images/homepage.jpg";
// import { Container, Row, Col } from 'reactstrap';
import React from "react";
import { Jumbotron, Button, Nav } from "reactstrap";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Typewriter } from "react-typewriting-effect";

import CatBox from "../components/categorybox";
const Jumbotron1 = styled(Jumbotron)`
  background: transparent;
  background-image: url(${homepage1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  background-position: center;
  text-align: center;
`;
function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md="12" xl="12">
          <Jumbotron1 fluid></Jumbotron1>
        </Col>
      </Row>
      <Row>
        <Col md="0" xl="3"></Col>
        <Col md="12" xl="6">
          Azfarul is a photographer bro. What more u want? 90% of my pics on
          instagram is taken by him steady fella
        </Col>
        <Col md="0" xl="3"></Col>
      </Row>
      <Row>
        <Col md="12" xl="12">
          <Jumbotron style={{ textAlign: "center", backgroundColor: "white" }}>
            <h1>
              <Typewriter
                string="Photo Categories"
                delay={100}
                cursor="_"
                stopBlinkinOnComplete
              />
            </h1>
          </Jumbotron>
        </Col>
      </Row>

      <CatBox></CatBox>
    </Container>
  );
}

export default Home;
