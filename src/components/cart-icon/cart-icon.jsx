import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart-context';

import './cart-icon.scss';

const CartIcon = () => {
  const {isHidden, setHidden, itemsCount } = useContext(CartContext)

  const toggleHidden = () => setHidden(!isHidden)

  return (
    <div className='cart-icon-container' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemsCount}</span>
    </div>
  );
}

export default CartIcon;