import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
     <span onClick={() => props.select(props.id)} >
      <div className="img-container">

        <img alt={props.name} src={props.image} />
      </div>
      </span>
    </div>
  );
}

export default FriendCard;
