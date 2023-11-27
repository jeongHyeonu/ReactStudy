/**
 * ch11/proj/02-1
 * ./src/components/Pages.js
 */

import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { MainMenu, AboutMenu } from './Menus';
import '../style/style.css';
import productData from "../data/product-data.json";

const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);
  
export const Home = () => (
  <div className="home">
    <h2 className="logo">[Home]</h2>
    <nav className="top-menu-nav">
      <ul className="top-menu">
        <li><Link to="about">About</Link></li>
        <li><Link to="events">Events</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="contact">Contact us</Link></li>
      </ul>      
    </nav>
  </div>
);

export const About = () => (
  <PageTemplate>
    <section className="about">
      <AboutMenu />
      <Outlet />
    </section>
  </PageTemplate>
);

export const Events = () => (
  <PageTemplate>
    <section className="events">
      <h1>[Events]</h1>
      <p>This area is for events</p>
    </section>
  </PageTemplate>
);

export const Products = () => (
  <PageTemplate>
    <section className="products">
      
      <Outlet />
    </section>
  </PageTemplate>
);

export const ProductList = () => (
  <>
    <h1>[Products]</h1>
    <ul>
      {productData.map( (prd, i) => (
        <li key={i}><Link to={prd.Id}>{prd.Category}</Link></li>
      ))}
    </ul>
  </>  
);

export const ProductInfo = () => {
  const { id } = useParams();
  console.log("id: ", id);

  const product = productData.reduce( (obj1, obj2) => obj1.Id == id ? obj1 : obj2  );
  if (!product) return <div>No product information</div>;
  console.log(product);
  
  return (
    <>
      <h1>[Products Info]</h1>
      <h3>{product.Category}</h3>
      <ul>
        <li>Name: <b>{product.Name}</b></li>
        <li>Period: {product.Period}</li>
        <li>Manager: {product.Manager}</li>
      </ul>      
    </>    
  )
};

export const Contact = () => (
  <PageTemplate>
    <section className="contact">
      <h1>[Contact]</h1>
      <p>This area is for contact</p>
    </section>
  </PageTemplate>
);

export const Whoops404 = ({ location }) => (
  <div className="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>
);

export const Company = () => (
  <section className="company">
    <h2>Our company</h2>
    <p>Our company ...</p>
    <p>Our company ...</p>
  </section>
);

export const Services = () => (
  <section className="services">
    <h2>Our services</h2>
    <p>Our services ...</p>
    <p>Our services ...</p>
  </section>
);

export const History = () => (
  <section className="history">
    <h2>Our history</h2>
    <p>Our history ...</p>
    <p>Our history ...</p>
  </section>
);

export const Locations = () => (
  <section className="locations">
    <h2 className="content-title">Our locations</h2>
    <p>Our locations ...</p>
    <p>Our locations ...</p>
  </section>
);
