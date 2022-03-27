import { Routes, Route } from 'react-router-dom';

import Home from './routes/home';

import Navigation from './routes/navigation/navigation';
import CheckoutPage from './routes/checkout/checkout';
import SignInUp from './routes/sign-in-up/signInUp';
import Shop from './routes/shop/shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignInUp />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  )
};

export default App;
