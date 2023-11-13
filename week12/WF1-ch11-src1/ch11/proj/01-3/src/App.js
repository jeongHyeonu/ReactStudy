/**
 * ch11/proj/01-3
 * ./src/App.js
 */

import { Route, Routes } from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404 } from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/events" element={<Events />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Whoops404 />} />
  </Routes>
);

export default App;