// src/components/HomeRelawan.js
import React from 'react';
import HeaderRelawan from './HeaderRelawan'; 
import BergabungRelawan from './BergabungRelawan';
import PageRelawan from './PageRelawan';
import Kegiatan from './Kegiatan';
import Blog from './Blog';
import Tanggapan from './Tanggapan'; 
import Footer from './Footer';


const HomeRelawan = () => {
  return (
    <div className="overflow-hidden">
      <HeaderRelawan />
      <BergabungRelawan />
      <PageRelawan />
      <Kegiatan />
      <Blog />
      <Tanggapan />
      <Footer />
    </div>
  );
};

export default HomeRelawan;
