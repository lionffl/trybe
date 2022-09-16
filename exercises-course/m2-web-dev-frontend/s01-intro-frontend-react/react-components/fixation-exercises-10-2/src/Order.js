// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;
    const { value, currency } = price;

    return (
      <div>
        <p> {user} bought {product} for {value} {currency} </p>
      </div>
    );
  }
}

export default Order;