import React, { useContext } from 'react';
import convertCentsToDollars from '../../helpers/convertCentsToDollars';
import './index.css';
import CartContext from '../../context/CartContext';

const Menu = () => {
  const { addToCart, menuItems } = useContext(CartContext);

  return (
    <section className="panel__section">
      <h2 className="panel__heading">To Go Menu</h2>
      <div className="panel__content">
        {menuItems.map((item) => (
          <div className="menu__item" key={item.id}>
            <img
              alt={item.alt}
              className="menu-item__image"
              src={`./images/${item.image}`}
            />
            <h3 className="menu-item__name">{item.name}</h3>
            <p className="menu-item__price">{`$${convertCentsToDollars(item.price)}`}</p>
            <button
              className={`menu-item__button ${item.count > 0 ? 'menu-item__button--added' : ''}`}
              disabled={item.count > 0}
              onClick={() => addToCart(item.id)}
              type="button"
            >
              {item.count > 0 ? (
                <>
                  <img
                    alt="Check mark icon"
                    className="menu-item__button-image"
                    src="./images/check.svg"
                  />
                  In cart
                </>
              ) : (
                <>
                  Add to cart
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
