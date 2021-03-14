import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./fancybutton.scss";
function FancyButton(props) {
  return (
    <div style={{ marginTop: "1.5em" }}>
      <button class="button">
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to={`/category/${props.category}`}
        >
          View All
        </Link>
        <div class="button__horizontal"></div>
        <div class="button__vertical"></div>
      </button>
    </div>
  );
}

export default FancyButton;
