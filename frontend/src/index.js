import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Switch
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import WishList from './pages/WishList/WishList';
import Profile from './pages/Profile/Profile';
import Orders from './pages/Orders/Orders';
import Checkout from './pages/Checkout/Checkout';
import { AuthProvider } from './AuthContext';
import Delivery from './pages/Delivery/Delivery';
import Payment from './pages/Payment/Payment';
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder';
import Order from './pages/Order/Order';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/wishlist' element={<WishList />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/myorders' element={<Orders />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/delivery' element={<Delivery />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/confirmOrder' element={<ConfirmOrder />} />
      <Route path='/order/:id' element={<Order />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider >
      <Provider store={store}><RouterProvider router={router} /></Provider></AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
