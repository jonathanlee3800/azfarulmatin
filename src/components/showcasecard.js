import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
// Can be a string as well. Need to ensure each key-value pair ends with ;
import Loadingspinner from "./loadingSpinner";

function ShowcaseCard(props) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  useEffect(async () => {
    setLoading(true);
  }, [props.picture]);

  return (
    <div>
      <Card>
        <Loadingspinner loading={loading}></Loadingspinner>
        <CardImg
          onLoad={() => setLoading(false)}
          style={
            !loading ? { backgroundAttachment: "cover" } : { display: "none" }
          }
          top
          width="60%"
          src={props.picture}
          alt="Card image cap"
        />
      </Card>
    </div>
  );
}

export default ShowcaseCard;
