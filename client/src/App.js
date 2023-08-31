import { AppProvider } from './context.js';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Bestseller from './components/BestSeller/BestSeller.js';

import {
    BrowserRouter, Routes, Route
  } from 'react-router-dom';

import React from 'react'

const App = () => {
  return (
    <>
        <AppProvider>
            <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />}>
                <Route path = "about" element = {<About />} />
                <Route path = "book" element = {<BookList />} />
                <Route path = "/book/:id" element = {<BookDetails />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </AppProvider>
    </>
  )
}

export default App
