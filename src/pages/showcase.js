// import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { storage } from "../firebase";
import ShowcaseCard from "../components/showcasecard";

function Showcase() {
  let { id } = useParams();
  const [allImages, setAllimages] = useState([]);

  useEffect(async () => {
    console.log(localStorage.getItem("mydata"));
    let count = 1;
    const placeholder = [];
    if (localStorage.getItem(id) === null) {
      const response = await storage.ref(id).listAll();
      const allImages = await Promise.all(
        response.items.map(async (url) => {
          console.log("fetching data");
          return await url.getDownloadURL();
        })
      );
      localStorage.setItem(id, JSON.stringify(allImages));
      setAllimages(JSON.parse(localStorage.getItem(id)));
      console.log(JSON.parse(localStorage.getItem(id)), "nullbro");
    } else {
      setAllimages(JSON.parse(localStorage.getItem(id)));
      console.log(JSON.parse(localStorage.getItem(id)), "not null");
    }
  }, [id]);

  return (
    <Container fluid>
      <Row>
        {allImages.map((picture) => (
          <Col sm="12" xl="4">
            <ShowcaseCard picture={picture}></ShowcaseCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Showcase;
