import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const StripeCcGateway = ({ amount, currency, account, target }) => {
  //  const props = {account, target};

  console.log(amount, currency, account, target);

  return (
    <div>
      <StripeCheckout
        token={data => console.log('%%%% TOKEN RECEIVED', data)}
        stripeKey={account.authorization.publishable_key}
        name="Three Comma Co." // the pop-in header title
        description="Big Data Stuff" // the pop-in header subtitle
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Give Money" // prepended to the amount in the bottom pay button
        amount={1000000} // cents
        currency="USD"
        reconfigureOnUpdate={true}
      />
      <div>StripeCC: {target}</div>
      <div>
        {account.authorization.publishable_key} {target}
      </div>
    </div>
  );
};

StripeCcGateway.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  account: PropTypes.object.isRequired,
  target: PropTypes.string
};

export default StripeCcGateway;
