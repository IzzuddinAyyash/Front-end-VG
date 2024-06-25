import React from 'react';
import Footer from "../components/Footer";
import HeaderRelawan from '../components/HeaderRelawan';
import { useParams } from 'react-router-dom';
import { organisasi } from '../data/organisasi';
import ProfileOrganisasicomp from '../components/ProfileOrganisasicomp';

const InfoOrganisasi = () => {
  const { id } = useParams(); 
  const organisasiItem = organisasi.find(org => org.id === parseInt(id)); 

  if (!organisasiItem) {
    return <p>Organisasi tidak ditemukan.</p>; 
  }

  return (
    <div className="overflow-hidden">
      <HeaderRelawan />
      <ProfileOrganisasicomp organisasiItem={organisasiItem} />
      <Footer />
    </div>
  );
};

export default InfoOrganisasi;
