/**
 * ch11/proj/02-0
 * ./src/App.js
 */

import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404, Services, History, Locations, Company } from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/*" element={<About />}>
      <Route path="" element={<Company />} />
      <Route path="services" element={<Services />} />
      <Route path="history" element={<History />} />
      <Route path="locations" element={<Locations />} />
    </Route>
    <Route path="/events" element={<Events />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Navigate replace="true" to="/about/services" />} />
    <Route path="/history" element={<Navigate replace="true" to="/about/history" />} />
    <Route path="/locations" element={<Navigate replace="true" to="/about/locations" />} />
    <Route path="*" element={<Whoops404 />} />
  </Routes>
);

export default App;