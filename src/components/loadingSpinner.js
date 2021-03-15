import React, { useState, useEffect } from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
function Loadingspinner(props) {
  //other logic

  return (
    // <Loader
    //   visible={props.loading}
    //   type="ThreeDots"
    //   color="black"
    //   height={100}
    //   width={100}
    //   timeout={3000} //3 secs
    // />
    <ClipLoader color="black" loading={props.loading} size={100} />
  );
}
export default Loadingspinner;
