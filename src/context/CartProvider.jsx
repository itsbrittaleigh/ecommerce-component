import React, { useEffect, useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'French Fries with Ketchup',
      price: 223,
      image: 'plate__french-fries.png',
      alt: 'French Fries',
      count: 0,
    },
    {
      id: 2,
      name: 'Salmon and Vegetables',
      price: 512,
      image: 'plate__salmon-vegetables.png',
      alt: 'Salmon and Vegetables',
      count: 0,
    },
    {
      id: 3,
      name: 'Spaghetti Meat Sauce',
      price: 782,
      image: 'plate__spaghetti-meat-sauce.png',
      alt: 'Spaghetti with Meat Sauce',
      count: 0,
    },
    {
      di: 4,
      name: 'Bacon, Eggs, and Toast',
      price: 599,
      image: 'plate__bacon-eggs.png',
      alt: 'Bacon, Eggs, and Toast',
      count: 0,
    },
    {
      id: 5,
      name: 'Chicken Salad with Parmesan',
      price: 698,
      image: 'plate__chicken-salad.png',
      alt: 'Chicken Salad with Parmesan',
      count: 0,
    },
    {
      id: 6,
      name: 'Fish Sticks and Fries',
      price: 634,
      image: 'plate__fish-sticks-fries.png',
      alt: 'Fish Sticks and Fries',
      count: 0,
    },
  ]);
  const [stringifiedMenuItems, setStringifiedMenuItems] = useState(JSON.stringify(menuItems));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(menuItems.filter((item) => item.count > 0));
  }, [stringifiedMenuItems]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        decreaseCount,
        increaseCount,
        menuItems
      }}
    >
      {children}
    </CartContext.Provider>
  );

  function addToCart(id) {
    const match = menuItems.find((item) => item.id === id);
    match.count += 1;

    setMenuItems(menuItems);
    setStringifiedMenuItems(JSON.stringify(menuItems));
  }

  function increaseCount(id) {
    const match = menuItems.find((item) => item.id === id);
    match.count += 1;

    setMenuItems(menuItems);
    setStringifiedMenuItems(JSON.stringify(menuItems));
  }

  function decreaseCount(id) {
    const match = menuItems.find((item) => item.id === id);
    match.count -= 1;

    setMenuItems(menuItems);
    setStringifiedMenuItems(JSON.stringify(menuItems));
  }
};

export default CartProvider;
