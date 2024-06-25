import React from 'react'
import HeaderRelawan from '../components/HeaderRelawan';
import Profilerel from '../components/Profilerel'
import Footer from "../components/Footer";

const Profile = () => {
  return ( 
    <div className="overflow-hidden">
      <HeaderRelawan />
      <Profilerel />
      <Footer />
    </div>
  )
}

export default Profile;