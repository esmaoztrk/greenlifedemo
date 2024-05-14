import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Template from './components/Template';
import Home from "./components/Home";
import Blog from './components/Blog';
import PageNotFound from './components/PageNotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Template/>}>
  <Route path="/" element={<Home/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="*" element={<PageNotFound/>} />
  <Route path="/zadelife" element={<Products/>}/>
  </Route>  
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

