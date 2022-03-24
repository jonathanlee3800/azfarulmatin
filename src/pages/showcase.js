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
  const [error, setError] = useState(false);
  useEffect(async () => {
    try {
      console.log(error, "ERROR STATE");
      console.log(localStorage);
      let count = 1;
      const placeholder = [];
      if (localStorage.getItem(id) === null) {
        const response = await storage.ref(id).listAll();
        const allImagesURL = await Promise.all(
          response.items.map(async (url) => {
            console.log("fetching data",url.getDownloadURL());
            return await url.getDownloadURL();
          })
        );
        localStorage.setItem(id, JSON.stringify(allImagesURL));
        setAllimages(JSON.parse(localStorage.getItem(id)));
        console.log(JSON.parse(localStorage.getItem(id)), "nullbro");
      } else {
        setAllimages(JSON.parse(localStorage.getItem(id)));
        console.log(JSON.parse(localStorage.getItem(id)), "not null");
      }
    } catch (error) {
      setError(true);
    }
  }, [id]);

  return (
    <Container fluid>
      {!error ? (
        <Row>
          {allImages.map((picture) => (
            <Col sm="12" xl="4">
              <ShowcaseCard picture={picture}></ShowcaseCard>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Data Limit reached sorry :(</p>
      )}
    </Container>
  );
}

export default Showcase;
