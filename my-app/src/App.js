// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to the Shop!" />} />
        <Route path="/iron-studios" element={<ItemListContainer company="Iron Studios" />} />
        <Route path="/sideshow" element={<ItemListContainer company="Sideshow" />} />
        <Route path="/hot-toys" element={<ItemListContainer company="Hot Toys" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
