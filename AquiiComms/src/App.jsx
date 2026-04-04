import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CategoryPage from './CategoryPage';
import Header from '../Landing page/Navbar';
import Footer from '../Landing page/Footer';
import ProductDetails from './Productdetails';
import { CartProvider } from './CartContext';
function App() {
  return (
    <CartProvider>
    <Router> 
      <Header />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/products/all" element={<CategoryPage isAll={true} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;