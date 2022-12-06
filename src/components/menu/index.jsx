import React from 'react';
import menuItems from '../../data/menuItems';
import './index.css';

const Menu = () => {

  return (
    <section className="menu__section">
      <h2 className="menu__heading">To Go Menu</h2>
      {menuItems.map((item) => (
        <div className="menu__item" key={item.id}>
          <img
            alt={item.alt}
            className="menu-item__image"
            src={`./images/${item.image}`}
          />
          <h3 className="menu-item__name">{item.name}</h3>
          <p className="menu-item__price">{`$${formatPrice(item.price)}`}</p>
          <button
            className="menu-item__button"
            onClick={() => addToCart(item.id)}
            type="button"
          >
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );

  function formatPrice(cents) {
    return cents / 100;
  }

  function addToCart(id) {
    const match = menuItems.find((item) => item.id === id);

    match.count += 1;

    console.log(menuItems);
  }
};

export default Menu;
