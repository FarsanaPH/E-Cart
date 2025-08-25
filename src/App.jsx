import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="main-content pt-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
