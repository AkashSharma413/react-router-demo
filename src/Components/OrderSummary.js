import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <>
      <div>Order confirmed!</div>
      <button onClick={() => navigate(-1, {replace: true})}>Go back</button>
    </>
  );
};

export default OrderSummary;
