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
import FancyButton from "./fancybutton";

import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

// const styledLink = styled.Link`
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   margin-left: 1vw;
// `;
// const ListInlineItem1 =  styled(ListInlineItem)`
// border-bottom:1px solid black;

// // `
function CatBox() {
  useEffect(() => {
    console.log({ CategoryData });
  }, []);
  return (
    <Container className="themed-container" fluid="lg">
      <Row>
        {CategoryData.map((category) => (
          <Col xs="12" lg="6">
            <Fade left big>
              <Card>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                >
                  <CardImg
                    top
                    width="60%"
                    src={category.picture}
                    alt="Card image cap"
                  />
                </motion.div>
                <CardBody>
                  <CardTitle tag="h5">{category.category}</CardTitle>

                  <FancyButton
                    category={category.category.toLowerCase()}
                  ></FancyButton>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CatBox;
