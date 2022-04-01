import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const { cartItems, isHidden, setHidden } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => navigate('/checkout');
  // const toggleHidden = () => setHidden(!isHidden);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        { cartItems.length ?
          (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
          : (<span className='empty'>Your Cart Is Empty</span>)
        }
      </div>
      <Button onClick={checkoutHandler}>Go to Checkout</Button>
    </div>
  );
}

export default CartDropdown;