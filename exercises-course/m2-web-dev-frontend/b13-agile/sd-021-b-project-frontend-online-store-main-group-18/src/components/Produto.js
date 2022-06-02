import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produto extends React.Component {
  state = {
    rating: '',
    descricao: '',
    email: '',
    avaliacoes: [],
    load: false,
  };

  componentDidMount() {
    const test = localStorage.getItem('avaliações');
    if (test) {
      const pegaItem = JSON.parse(test);
      this.setState({ avaliacoes: pegaItem, load: true });
    }
  }

  handleRating = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { email, descricao, rating, avaliacoes } = this.state;
    const avaliacao = {
      descricao,
      email,
      rating,
    };
    this.setState({ avaliacoes: [...avaliacoes, avaliacao], load: true });
    this.setState({ email: '', descricao: '', rating: 1 });

    const salvarInfo = JSON.stringify([...avaliacoes, avaliacao]);
    localStorage.setItem('avaliações', salvarInfo);
  };

  render() {
    const { produto, addCart } = this.props;
    const { descricao, avaliacoes, load } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{ produto }</p>
        <button
          onClick={ addCart }
          data-testid="product-detail-add-to-cart"
          type="button"
          title={ produto }
        >
          btn
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          carrinho
        </Link>

        <form>
          <input
            data-testid="product-detail-email"
            type="email"
            onChange={ this.handleRating }
            name="email"
            required
          />

          <label htmlFor="check1">
            1
            <input
              type="radio"
              data-testid="1-rating"
              id="check1"
              name="rating"
              value="1"
              onChange={ this.handleRating }
            />
          </label>

          <label htmlFor="check2">
            2
            <input
              type="radio"
              data-testid="2-rating"
              id="check2"
              name="rating"
              value="2"
              onChange={ this.handleRating }
            />
          </label>

          <label htmlFor="check3">
            3
            <input
              type="radio"
              data-testid="3-rating"
              id="check3"
              name="rating"
              value="3"
              onChange={ this.handleRating }
            />
          </label>

          <label htmlFor="check4">
            4
            <input
              type="radio"
              data-testid="4-rating"
              id="check1"
              name="rating"
              value="4"
              onChange={ this.handleRating }
            />
          </label>

          <label htmlFor="check5">
            5
            <input
              type="radio"
              data-testid="5-rating"
              id="check5"
              name="rating"
              value="5"
              onChange={ this.handleRating }
            />
          </label>
          <textarea
            data-testid="product-detail-evaluation"
            onChange={ this.handleRating }
            value={ descricao }
            name="descricao"
          />
          <button
            data-testid="submit-review-btn"
            onClick={ this.handleClick }
            type="button"
          >
            Enviar
          </button>
        </form>
        <div>
          {load
              && avaliacoes.map((avaliacao) => (
                <div key={ uuidv4() }>
                  <p>{avaliacao.email}</p>
                  <p>{avaliacao.descricao}</p>
                  <p>{avaliacao.rating}</p>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Produto;
