import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import HomePage from './components/Pages/Home/Home';
import ShopPage from './components/Pages/Shop/Shop';
import CartPage from './components/Pages/Cart/Cart';
import ContactsPage from './components/Pages/Contacts/Contacts';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import ProductsCategory from './components/Category/Category';
import AboutPage from './components/Pages/About/About';

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path='/category/:categoryId' element={<ProductsCategory />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </>
  )
};
