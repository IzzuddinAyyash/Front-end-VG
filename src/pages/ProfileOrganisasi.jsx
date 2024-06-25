import React from 'react';
import Footer from '../components/Footer';
import ProfileOrganization from '../components/ProfileOrganization'; 
import HeaderOrganisasi from '../components/HeaderOrganisasi';

const ProfilePage = () => {
  return (
    <div>
      <HeaderOrganisasi />
      <ProfileOrganization />
      <Footer />
    </div>
  );
};

export default ProfilePage;
