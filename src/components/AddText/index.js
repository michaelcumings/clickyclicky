import React from "react";
import "./style.css";

function AddText(props) {
  return <p className="addtext">{props.children}</p>;
}

export default AddText;