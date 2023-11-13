/**
 * ch11/proj/01-2
 * ./src/App.js
 */

import { Route, Routes } from 'react-router-dom';
import { Home, About, Events, Products, Contact } from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/events" element={<Events />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default App;