import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

let stripeHandler;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    stripeHandler = StripeCheckout.configure({
      key: 'pk_test_U78fJAAuXr0aN5ETF5qSNR1n',
      locale: 'auto',
    });
  }
}

export default Checkout;

/*
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const STRIPE_PUBLISHABLE = 'pk_test_llM7Ft0pbTy2y8BROIJ8RuWy';
const PAYMENT_SERVER_URL = 'https://wt-d5447b3478b4e9a13b27dd4dc126dcdb-0.run.webtask.io/stripe-payment';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount),
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;

//////////////////////////////////////


*/
