import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user-context";
import { CartContext } from "../../context/cart-context";
import { SignOut } from "../../utils/firebase/firebase";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './navigation-style';

// import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isHidden } = useContext(CartContext)

  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>
            Shop
          </OptionLink>
          {
            currentUser
            ? <OptionLink as="span" onClick={SignOut}>Sign Out</OptionLink>
            : <OptionLink to='/sign-in'>Sign In</OptionLink>
          }
          <CartIcon />
        </OptionsContainer>
        { isHidden && <CartDropdown />}
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;