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
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { storage } from "../firebase";

function Showcase() {
  let { id } = useParams();
  const [allImages, setAllimages] = useState([]);

  const setloaded = () => {
    window.scrollTo(0, 0);
  };

  useEffect(async () => {
    console.log(localStorage.getItem("mydata"));
    let count = 1;
    const placeholder = [];
    if (localStorage.getItem(id) === null) {
      const response = await storage.ref(id).listAll();

      // const allURl = response.items.map(async (url) => {
      //   console.log("before");
      //   const res1 = await url.getDownloadURL();
      //   console.log((count = count + 1));
      //   return res1;
      // });
      // console.log(allURl);
      // for (let item of response.items) {
      //   console.log("before");
      //   const res1 = await item.getDownloadURL();
      //   console.log((count = count + 1));
      //   placeholder.push(res1);
      // }
      // console.log(placeholder);
      // console.log("middle");

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
  }, []);

  return (
    <Container fluid>
      <Row>
        {allImages.map((picture) => (
          <Col sm="12" xl="4">
            <Card>
              <CardImg
                onLoad={setloaded()}
                style={{ backgroundAttachment: "cover" }}
                top
                width="60%"
                src={picture}
                alt="Card image cap"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Showcase;
