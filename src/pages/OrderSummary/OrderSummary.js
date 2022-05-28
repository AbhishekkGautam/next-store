import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "./OrderSummary.css";

export const OrderSummary = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <main>
      <div className="order-summary-section">
        <div className="order-summary-container">
          {state?.orderId ? (
            <>
              <BsPatchCheckFill className="check-icon" />
              <h3 className="order-success-message">
                Order placed successfully.
              </h3>
              <Link className="btn btn-primary btn-sm" to="/products">
                Continue shopping
              </Link>
            </>
          ) : (
            <>
              <h3>Something went wrong.</h3>
              <Link className="btn btn-primary-outline btn-sm m-4" to="/">
                Back to home
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
