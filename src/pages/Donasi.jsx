import React from 'react'
import HeaderOrganisasi from '../components/HeaderOrganisasi'
import Donasicomp from '../components/Donasicomp';
import Footer from "../components/Footer";

const Donasi = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderOrganisasi />
      <Donasicomp />
      <Footer />
    </div>
  )
}

export default Donasi;