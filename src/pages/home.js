import homepage1 from "../assets/images/homepage.jpg";
// import { Container, Row, Col } from 'reactstrap';
import React from "react";
import { Jumbotron, Button, Nav } from "reactstrap";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Typewriter } from "react-typewriting-effect";
import Fade from "react-reveal/Fade";

import CatBox from "../components/categorybox";
const Jumbotron1 = styled(Jumbotron)`
  background: transparent;
  background-image: url(${homepage1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  background-position: center;
`;
function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md="12" xl="12">
          <Jumbotron1 fluid></Jumbotron1>
        </Col>
      </Row>
      <Fade left>
        <Row>
          <Col md="12" xl="12">
            <Jumbotron
              style={{ textAlign: "center", backgroundColor: "white" }}
            >
              <h1>ABOUT ME</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md="0" xl="3"></Col>
          <Col md="12" xl="6">
            <p>
              Hi! My name is Azfarul Matin and I’m a self-taught photographer
              based in Singapore. Capturing the moments that matter made me
              developed an interest in photography. I feel strongly about taking
              photographs I can connect and resonate with.
            </p>
          </Col>
          <Col md="0" xl="3"></Col>
        </Row>
        <Row>
          <Col md="0" xl="3"></Col>
          <Col md="12" xl="6">
            <p>
              There’s no surprise that photography is the love of my life, but
              travelling is also the blood in my veins. I’m endlessly inspired
              by nature and adventures. I love making friends with people,
              waking up to new horizons, and exploring the world.
            </p>
          </Col>
          <Col md="0" xl="3"></Col>
        </Row>
        <Row>
          <Col md="0" xl="3"></Col>
          <Col md="12" xl="6">
            <p>
              Welcome to my personal collection of photos. Here’s where you can
              find out more about me. Think we could create something together?
              Feel free to drop me an email!
            </p>
          </Col>
          <Col md="0" xl="3"></Col>
        </Row>
      </Fade>
      <Row>
        <Col md="12" xl="12">
          <Jumbotron style={{ textAlign: "center", backgroundColor: "white" }}>
            <h1>PERSONAL COLLECTION</h1>
          </Jumbotron>
        </Col>
      </Row>

      <CatBox></CatBox>
    </Container>
  );
}

export default Home;
