// index.js

import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Step 1: Set Up Redux Store
const store = createStore(cartReducer);

// Step 2: Create Reducers
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_CART':
      // Implement logic to update cart item
      return state;
    default:
      return state;
  }
};

// Step 3: Create Actions
const addToCart = item => ({
  type: 'ADD_TO_CART',
  payload: item,
});

const removeFromCart = itemId => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

const updateCart = updatedItem => ({
  type: 'UPDATE_CART',
  payload: updatedItem,
});

// Step 4: Use Hooks and Connect with React
const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state,
});

const ConnectedCart = connect(mapStateToProps, { removeFromCart })(Cart);

// Step 5: Subscribe to the Store
const App10 = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Other components */}
        <ConnectedCart />
      </div>
    </Provider>
  );
};

export default App10;