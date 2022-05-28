import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from "./context/user-context";

import Home from './routes/home';

import Navigation from './routes/navigation/navigation';
import CheckoutPage from './routes/checkout/checkout';
import SignInUp from './routes/sign-in-up/signInUp';
import Shop from './routes/shop/shop';

const App = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={currentUser ? <Navigate to='/' /> :<SignInUp />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  )
};

export default App;
