import React, { useContext } from 'react';
import convertCentsToDollars from '../../helpers/convertCentsToDollars';
import CartContext from '../../context/CartContext';
import './index.css';

const Cart = () => {
  const taxRate = 0.0975;
  const { cartItems, increaseCount, decreaseCount } = useContext(CartContext);
  const subTotal = cartItems.reduce((accumulator, currentValue) =>
    accumulator + (currentValue.count * currentValue.price), 0);
  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  return (
    <section className="panel">
      <h2 className="panel__heading">Your Cart</h2>
      <div className="panel__content">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item__image-container">
                    <img
                      alt={item.alt}
                      className="cart-item__image"
                      src={`./images/${item.image}`}
                    />
                    <p className="cart-item__quantity--image">{item.count}</p>
                  </div>
                  <div className="cart-item__content-container">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__price">{`$${convertCentsToDollars(item.price)}`}</p>
                    <div className="card-item__quantity-container">
                      <div className="cart-item__button-container">
                        <button
                          aria-label={`Decrease ${item.name} quantity to ${item.count - 1}`}
                          className="cart-item__button cart-item__button--decrease"
                          onClick={() => decreaseCount(item.id)}
                        >
                          <img src="./images/chevron.svg" alt="Decrease icon" />
                        </button>
                        <p className="cart-item__quantity">{item.count}</p>
                        <button
                          aria-label={`Increase ${item.name} quantity to ${item.count + 1}`}
                          className="cart-item__button cart-item__button--increase"
                          onClick={() => increaseCount(item.id)}
                        >
                          <img src="./images/chevron.svg" alt="Increase icon" />
                        </button>
                      </div>
                      <p className="card-item__total-price">
                        {`$${convertCentsToDollars(item.count * item.price)}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="total__container">
              <table className="total">
                <tbody>
                  <tr>
                    <td className="total__label">Subtotal:</td>
                    <td className="total__value">{`$${convertCentsToDollars(subTotal)}`}</td>
                  </tr>
                  <tr>
                    <td className="total__label">Tax:</td>
                    <td className="total__value">{`$${convertCentsToDollars(tax)}`}</td>
                  </tr>
                  <tr>
                    <td className="total__label">Tax:</td>
                    <td className="total__value total__value--emphasized">
                      {`$${convertCentsToDollars(total)}`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
