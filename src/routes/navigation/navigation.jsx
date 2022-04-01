import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user-context";
import { CartContext } from "../../context/cart-context";
import { SignOut } from "../../utils/firebase/firebase";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isHidden } = useContext(CartContext)

  // console.log(currentUser)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            Shop
          </Link>
          {
            currentUser
            ? <span className="nav-link" onClick={SignOut}>Sign Out</span>
            : <Link className="nav-link" to='/sign-in'>Sign In</Link>
          }
          <CartIcon />
        </div>
        { isHidden && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;