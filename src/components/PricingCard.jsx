import "./PricingStyle.css";
import Price from "../api/pricePlan.json";
import React from "react";
import PlanCard from "./PlanCard";

function PricingCard() {
  return (
    <div className="PricingCard">
      <h1>Pricing Plan For Working</h1>
      <div className="card-container">
        {Price.map((item) => (
          <PlanCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PricingCard;
