/**
 * ch11/proj/01-6
 * ./src/App.js
 *
 * <Navigate />
 * https://reactrouter.com/en/main/components/navigate
 * useNavigate()
 * https://reactrouter.com/en/main/hooks/use-navigate
 */

import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404, Services, History, Locations } from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/*" element={<About />}>
      <Route path="services" element={<Services />} />
      <Route path="history" element={<History />} />
      <Route path="locations" element={<Locations />} />
    </Route>
    <Route path="/events" element={<Events />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Navigate replace="true" to="/about/services" />} />
    <Route path="/history" element={<Navigate to="/about/history" />} />
    <Route path="/locations" element={<Navigate to="/about/locations" />} />
    <Route path="*" element={<Whoops404 />} />
  </Routes>
);

export default App;