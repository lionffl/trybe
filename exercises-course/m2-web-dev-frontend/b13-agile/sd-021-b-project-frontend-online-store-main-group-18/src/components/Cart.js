import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import BuascaVazio from './BuscaVazio';

class Cart extends React.Component {
  render() {
    const { cart, productQuantity } = this.props;
    return (
      <div>
        { cart.length > 0 ? (
          cart.map(({ product, quantity }) => (
            <div data-testid="shopping-cart-product-name" key={ uuidv4() }>
              { product }
              <input
                type="button"
                id={ product }
                onClick={ productQuantity }
                data-testid="product-increase-quantity"
                value="+"
              />
              <div data-testid="shopping-cart-product-quantity">{ quantity }</div>
              { quantity < 2 ? (
                <input
                  type="button"
                  id={ product }
                  data-testid="product-decrease-quantity"
                  value="-"
                  disabled
                  onClick={ productQuantity }
                />
              ) : (
                <input
                  type="button"
                  id={ product }
                  data-testid="product-decrease-quantity"
                  disabled={ false }
                  value="-"
                  onClick={ productQuantity }
                />
              )}
            </div>
          ))
        ) : (
          <BuascaVazio />
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ).isRequired,
  productQuantity: PropTypes.func.isRequired,
};

export default Cart;
