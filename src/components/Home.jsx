import React, { useState } from 'react';
import Header from './Header';
import BergabungHome from './BergabungHome';
import Page from './Page';
import Kegiatan from './Kegiatan';
import Blog from './Blog';
import Tanggapan from './Tanggapan';
import Footer from './Footer';
import BuatAkun from './BuatAkun'; 

const Home = ({ isLoggedIn, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDaftarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} onDaftarClick={handleDaftarClick} />
      <BergabungHome />
      <Page />
      <Kegiatan />
      <Blog />
      <Tanggapan />
      <Footer />
      {isModalOpen && <BuatAkun isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
