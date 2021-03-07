// import { Container, Row, Col } from 'reactstrap';
import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// import { ShowcaseData } from "../data/showcaseData";
function Showcase() {
  console.log("LOOOOL");
  let id = useParams();
  //   let showcase = ShowcaseData.find((data) => data.showcaseName === id.id);

  return (
    <Container fluid>
      <Row>
        {/* {showcase.pictures.map((picture) => (
          <Col sm="12" xl="4">
            <Card>
              <CardImg
                style={{ backgroundAttachment: "cover" }}
                top
                width="60%"
                src={picture}
                alt="Card image cap"
              />
            </Card>
          </Col>
        ))} */}
      </Row>
    </Container>
  );
}

export default Showcase;
