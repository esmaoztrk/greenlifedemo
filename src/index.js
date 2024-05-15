import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Template from './components/Template';
import Home from "./components/Home";
import Blog from './components/Blog';
import Query from './components/Query';
import PageNotFound from './components/PageNotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/Products';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Template/>}>
  <Route index element={<Home/>}/>
  <Route path="blog" element={<Blog/>}/>
  <Route path="zadelife" element={<Products/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path='siparis-sorgulama' element={<Query/>}/>
  <Route path="*" element={<PageNotFound/>} />
  </Route>  
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

