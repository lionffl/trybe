import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Listagem from './components/Listagem';
import Cart from './components/Cart';
import Produto from './components/Produto';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      produto: '',
    };
  }

  addCart = ({ target }) => {
    /* const { cart } = this.state; */
    const { title } = target;
    const obj = {
      product: title,
      quantity: 1,
    };
    const cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartLocal.some((element) => element.product === title)) {
      console.log('ja tem');
    } else {
      this.setState((prev) => ({
        cart: [...prev.cart, obj],
      }), () => {
        const { cart } = this.state;
        localStorage.setItem('cart', JSON.stringify(cart));
      });
    }
  }

  productDetails = ({ target }) => {
    const productName = target.name;
    this.setState({
      produto: productName,
    });
  }

  productQuantity = ({ target }) => {
    const cartLocal = JSON.parse(localStorage.getItem('cart'));
    const newCart = cartLocal.filter((produto) => produto.product !== target.id);
    const product = cartLocal.find((produto) => produto.product === target.id);
    if (target.value === '+') {
      product.quantity += 1;
    } else {
      product.quantity -= 1;
    }
    newCart.push(product);
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.setState({ cart: newCart });
    // oo
  }

  render() {
    const { cart, produto } = this.state;
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Listagem addCart={ this.addCart } productDetails={ this.productDetails } />
        </Route>
        <Route exact path="/cart">
          <Cart cart={ cart } productQuantity={ this.productQuantity } />
        </Route>
        <Route exact path="/produto">
          <Produto produto={ produto } addCart={ this.addCart } />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
