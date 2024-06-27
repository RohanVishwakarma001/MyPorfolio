import { Link } from "react-router-dom";
import "./PlanCardStyle.css";
import React from "react";

function PlanCard(props) {
  // eslint-disable-next-line react/prop-types
  const { plan_namw, price, duration, pages, work, compatibility } = props.item;
  return (
    <div className="card">
      <h3>{plan_namw}</h3>
      <span className="bar"></span>
      <p className="btc">{price}</p>
      <p>{duration}</p>
      <p>{pages}</p>
      <p>{work}</p>
      <p>{compatibility}</p>
      <Link to={"/contact"} className="btn" id="buyBTN">
        PURCHASE NOW
      </Link>
    </div>
  );
}

export default PlanCard;
