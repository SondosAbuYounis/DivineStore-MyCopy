import { Elements, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
       <Elements >
      <PaymentElement />
      <button>Submit</button>
      </Elements>
    </form>
  );
};

export default CheckoutForm;