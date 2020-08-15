import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeButton.scss";
const StripeButton = ({ price }) => {
  const STRIPE_PRICE = price * 100; // Cents.
  const PUBLISHABLE_KEY =
    "pk_test_51HGJ5NB8cuYUqhc82ZzjsCHNPYItHqFBueU3MpvnqweSKIEIggwq87ei3pSgISHv0cweawCWBmvElWGi1Mj5zHyj007sHt46TY";
  const handleToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <>
      {price > 0 ? (
        <StripeCheckout
          label="Pay Now"
          name="Swaraj App"
          billingAddress
          shippingAddress
          currency="INR"
          description={`Your bill is ${price}`}
          image="https://sendeyo.com/up/d/f3eb2117da"
          amount={STRIPE_PRICE}
          stripeKey={PUBLISHABLE_KEY}
          panelLabel="Pay Now"
          token={handleToken}
        />
      ) : (
        <div>Please add an item to see payment button.</div>
      )}
    </>
  );
};

export default StripeButton;
