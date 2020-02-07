import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Cards.module.scss';
import SingleCard from '../SingleCard/SingleCard';
import Blitz from './blitz.svg';
import Printer from './printer.svg';
import Illu from './illustration.svg';
import About from '../../Aboutme/aboutsm.jpg';

let stripeHandler;

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.openStripeCheckout = this.openStripeCheckout.bind(this);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    stripeHandler = StripeCheckout.configure({
      key: 'pk_live_aZDp5S060sZRhNAJDAojDVXc',
      locale: 'auto',
    });
  }

  openStripeCheckout(number, event) {
    event.preventDefault();

    const totals = number;

    stripeHandler.open({
      name: 'Sofia Moraes',
      image: About,
      description: 'Professional Designer',
      // billingAddress: true,
      amount: totals,
      token: (token, args) => {
        fetch('https://exec.clay.run/philippzach/create-stripe-payment', {
          method: 'POST',
          body: JSON.stringify({
            token,
            args,
            charge: {
              amount: totals, // totals.price,
              currency: 'USD',
            },
          }),
        })
          .then(response => response.json())
          .then(data => {
            this.setState({ loading: true });
            console.log(this.state);
          })
          .catch(error => {
            console.log(`Fetch failed:${error}`);
          });
      },
    });
  }

  render() {
    if (this.state.loading) {
      return <Redirect to="/creativebrief" />;
    }
    return (
      <div className={styles.container}>
        <div onClick={e => this.openStripeCheckout(8000, e)}>
          <SingleCard
            image={Blitz}
            heading="2 hours"
            heading2="Simple Graphics"
            list={['Icon', 'Button', 'Facebook Ads', 'Social Media Page', 'Ad Design']}
            amount="6000"
          />
        </div>
        <div onClick={e => this.openStripeCheckout(15000, e)}>
          <SingleCard
            image={Printer}
            heading="3 hours"
            heading2="Marketing Material"
            list={['Business Cards', 'Flyers', 'Posters', 'Print Material', 'Stickers']}
            amount="150000"
          />
        </div>
        <div onClick={e => this.openStripeCheckout(30000, e)}>
          <SingleCard
            image={Illu}
            heading="6 hours"
            heading2="Art & More"
            list={['Logo', 'Illustration', 'Packaging', 'Pattern', 'Animations']}
            amount="300000"
          />
        </div>
      </div>
    );
  }
}

/*
if (!this.loading.false) {
  return (
    <div className={styles.container}>
      <div onClick={e => this.openStripeCheckout(8000, e)}>
        <SingleCard
          image={Blitz}
          heading="2 hours"
          heading2="Simple Graphics"
          list={['Icon', 'Button', 'Facebook Ads', 'Social Media Page', 'Ad Design']}
          amount="6000"
        />
      </div>
      <div onClick={e => this.openStripeCheckout(15000, e)}>
        <SingleCard
          image={Printer}
          heading="3 hours"
          heading2="Marketing Material"
          list={['Business Cards', 'Flyers', 'Posters', 'Print Material', 'Stickers']}
          amount="150000"
        />
      </div>
      <div onClick={e => this.openStripeCheckout(30000, e)}>
        <SingleCard
          image={Illu}
          heading="6 hours"
          heading2="Art & More"
          list={['Logo', 'Illustration', 'Packaging', 'Pattern', 'Animations']}
          amount="300000"
        />
      </div>
    </div>
  );
} else {
  return <Redirect to="/typeform" />;
}
*/