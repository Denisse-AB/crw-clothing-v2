import { Context, useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import './product-card.scss';
import Button from '../button/button';

const ProductCard = ({ product }) => {
  const {addItemToCart} = useContext(CartContext)
  const { name, price, imageUrl } = product

  const insertItemToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={insertItemToCart}>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;