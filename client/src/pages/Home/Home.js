import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Bestseller from '../../components/BestSeller/BestSeller';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <Bestseller/>
    </main>
  )
}

export default Home