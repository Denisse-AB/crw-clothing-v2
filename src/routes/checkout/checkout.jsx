import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import './checkout.scss';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Total: ${cartTotal}</span>
      </div>
      {/* <StripeCheckoutButton price={total} /> */}
    </div>
  );
}

export default CheckoutPage;