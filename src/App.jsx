import Cart from './components/cart';
import CartProvider from './context/CartProvider';
import Menu from './components/menu';
import './styles.css';

const App = () => {

  return (
    <CartProvider>
      <>
        <Menu />
        <Cart />
      </>
    </CartProvider>
  );
};
// function App() {
//   <Menu />
//   <Cart />
//   return (
//     <div class="wrapper menu">
//       <div class="panel">
//         <h1>To Go Menu</h1>
//         <ul class="menu">
//           <li>
//             <div class="plate">
//               <img src="images/plate__french-fries.png" alt="French Fries" class="plate" />
//             </div>
//             <div class="content">
//               <p class="menu-item">French Fries with Ketchup</p>
//               <p class="price">$2.23</p>
//               <button class="in-cart">
//                 <img src="images/check.svg" alt="Check" />
//                 In Cart
//               </button>
//             </div>
//           </li>
//           <li>
//             <div class="plate">
//               <img src="images/plate__salmon-vegetables.png" alt="Salmon and Vegetables" class="plate" />
//             </div>
//             <div class="content">
//               <p class="menu-item">Salmon and Vegetables</p>
//               <p class="price">$5.12</p>
//               <button class="add">Add to Cart</button>
//             </div>
//           </li>
//           <li>
//             <div class="plate">
//               <img src="images/plate__spaghetti-meat-sauce.png" alt="Spaghetti Meat Sauce" class="plate" />
//             </div>
//             <div class="content">
//               <p class="menu-item">Spaghetti with Meat Sauce</p>
//               <p class="price">$7.82</p>
//               <button class="add">Add to Cart</button>
//             </div>
//           </li>
//           <li>
//             <div class="plate">
//               <img src="images/plate__bacon-eggs.png" alt="Bacon, Eggs, and Toast" class="plate" />
//             </div>
//             <div class="content">
//               <p class="menu-item">Bacon, Eggs, and Toast</p>
//               <p class="price">$5.99</p>
//               <button class="add">Add to Cart</button>
//             </div>
//           </li>
//           <li>
//             <div class="plate">
//               <img src="images/plate__chicken-salad.png" alt="Chicken Salad with Parmesean" class="plate" />
//             </div>
//             <div class="content">
//               <p class="menu-item">Chicken Salad with Parmesan</p>
//               <p class="price">$6.98</p>
//               <button class="add">Add to Cart</button>
//             </div>
//           </li>
//           <li>
//             <div class="plate">
//               <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" class="plate" />
//             </div>
//             <div class="content">
//               <p class="menu-item">Fish Sticks and Fries</p>
//               <p class="price">$6.34</p>
//               <button class="add">Add to Cart</button>
//             </div>
//           </li>
//         </ul>
//       </div>

//       <div class="panel cart">
//         <h1>Your Cart</h1>
//         {/* <!-- <p class="empty">Your cart is empty.</p> --> */}

//         <ul class="cart-summary">
//           <li>
//             <div class="plate">
//               <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" class="plate" />
//               <div class="quantity">1</div>
//             </div>
//             <div class="content">
//               <p class="menu-item">Fish Sticks and Fries</p>
//               <p class="price">$6.34</p>
//             </div>
//             <div class="quantity__wrapper">
//               <button class="decrease">
//                 <img src="images/chevron.svg" />
//               </button>
//               <div class="quantity">1</div>
//               <button class="increase">
//                 <img src="images/chevron.svg" />
//               </button>
//             </div>
//             <div class="subtotal">
//               $6.34
//             </div>
//           </li>

//           <li>
//             <div class="plate">
//               <img src="images/plate__french-fries.png" alt="French Fries" class="plate" />
//               <div class="quantity">2</div>
//             </div>
//             <div class="content">
//               <p class="menu-item">French Fries with Ketchup</p>
//               <p class="price">$2.23</p>
//             </div>
//             <div class="quantity__wrapper">
//               <button class="decrease">
//                 {/* <img src="images/chevron.svg" /> */}
//               </button>
//               <div class="quantity">2</div>
//               <button class="increase">
//                 {/* <img src="images/chevron.svg" /> */}
//               </button>
//             </div>
//             <div class="subtotal">
//               $4.46
//             </div>
//           </li>
//         </ul>

//         <div class="totals">
//           <div class="line-item">
//             <div class="label">Subtotal:</div>
//             <div class="amount price subtotal">$10.80</div>
//           </div>
//           <div class="line-item">
//             <div class="label">Tax:</div>
//             <div class="amount price tax">$1.05</div>
//           </div>
//           <div class="line-item total">
//             <div class="label">Total:</div>
//             <div class="amount price total">$11.85</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
