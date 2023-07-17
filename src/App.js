
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import products from './data/products.js';

import GalleryPage from './pages/GalleryPage.js'
import FAQ from './pages/FAQ.js';
import HomePage from './pages/HomePage.js';
import Nav from './components/Nav.js';
import OrderPage from './pages/OrderPage.js'
import Notifications from './pages/Notifications.js'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>

        <header className="App-header">
          <h1>Yogurtland
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/order" element={<OrderPage products={products} />} />
                <Route path="/Notifications" element={<Notifications />} /> 



            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Soo Young Lee</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
