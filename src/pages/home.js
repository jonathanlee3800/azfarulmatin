import homepage1 from "../assets/images/homepage.jpg";
// import { Container, Row, Col } from 'reactstrap';
import React from "react";
import { Jumbotron, Button, Nav } from "reactstrap";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import CatBox from "../components/categorybox";
const Jumbotron1 = styled(Jumbotron)`
  background: transparent;
  background-image: url(${homepage1});
  background-repeat: no-repeat;
  background-attachment: fixed;
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
          Yik Keat is a self taught urban photographer based in Singapore. Only
          at the age of 23, Yik Keat has accumulated a following of 240,000
          individuals on Instagram, where most of his work can be found. He is
          known for telling stories out of the ordinary, daily life and has a
          unique set of colours. Yik Keat puts in immense effort in crafting
          every piece of visual and hopes to convey a certain kind of emotion to
          every audience out there.
        </Col>
        <Col md="0" xl="3"></Col>
      </Row>
      <Row>
        <Col md="0" xl="3"></Col>
        <Col md="12" xl="6">
          Yik Keat is a self taught urban photographer based in Singapore. Only
          at the age of 23, Yik Keat has accumulated a following of 240,000
          individuals on Instagram, where most of his work can be found. He is
          known for telling stories out of the ordinary, daily life and has a
          unique set of colours. Yik Keat puts in immense effort in crafting
          every piece of visual and hopes to convey a certain kind of emotion to
          every audience out there.
        </Col>
        <Col md="0" xl="3"></Col>
      </Row>

      <CatBox></CatBox>
    </Container>
  );
}

export default Home;
