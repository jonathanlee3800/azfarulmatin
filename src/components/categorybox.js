import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { CategoryData } from "../data/categories";
import homepage1 from "../assets/images/category/animal.jpg";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// const Footer =  styled.div`

// left: 0;
// bottom: 0;
// width: 100%;
// margin-left:1vw;
// `
// const ListInlineItem1 =  styled(ListInlineItem)`
// border-bottom:1px solid black;

// `
function CatBox() {
  useEffect(() => {
    console.log({ CategoryData });
  }, []);
  return (
    <Container className="themed-container" fluid="lg">
      <Row>
        {CategoryData.map((category) => (
          <Col md="6" xl="6">
            <Card>
              <CardImg
                top
                width="60%"
                src={category.picture}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{category.category}</CardTitle>

                <Button>
                  <Link to={`/category/${category.category.toLowerCase()}`}>
                    View All
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CatBox;
