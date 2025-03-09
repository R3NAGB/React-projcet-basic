import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Nav/>
    <App />
    <Footer />
  </BrowserRouter>,
)
