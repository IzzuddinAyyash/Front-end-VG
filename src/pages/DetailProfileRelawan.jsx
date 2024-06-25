import React from 'react'
import HeaderOrganisasi from '../components/HeaderOrganisasi';
import DetailProfileRelawan from '../components/DetailProfileRelawan';
import Footer from "../components/Footer";

const DetailProfile = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderOrganisasi />
      <DetailProfileRelawan />
      <Footer />
    </div>
  )
}

export default DetailProfile;