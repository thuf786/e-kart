import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
function App() {
  return (
    <div>
      <Header/>
     
     <Routes>
     
     <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
     </Routes>
     <Footer/>
    
    </div>
  );
}

export default App;
