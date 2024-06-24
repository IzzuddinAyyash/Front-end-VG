import React from 'react';
import HeaderOrganisasi from './HeaderOrganisasi'; 
import PageOrganisasi from './PageOrganisasi'; 
import VolunteerList from './VolunteerList';
import Blog from './Blog';
import Tanggapan from './Tanggapan'; 
import Footer from './Footer';
import BergabungOrganisasi from './BergabungOrganisasi';


const HomeOrganisasi = () => {
  return (
    <div className="overflow-hidden">
      <HeaderOrganisasi />
      <BergabungOrganisasi />
      <PageOrganisasi />     
      <VolunteerList />
      <Blog />
      <Tanggapan />
      <Footer />
    </div>
  );
};

export default HomeOrganisasi;
