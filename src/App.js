import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Landingpage from './pages/LandingPage'; 
import DaftarRelawan from './pages/DaftarRelawan';
import DaftarOrganisasi from './pages/DaftarOrganisasi';
import Tentangkami from './pages/TentangKami';
import Donasi from './pages/Donasi';
import Donate from './pages/Donate';
import Dashboardrelawan from './pages/Dashboardrelawan';
import DashboardOrganisasi from './pages/DashboardOrganisasi';
import ProfileRelawan from './pages/ProfileRelawan';
import ProfileOrganisasi from './pages/ProfileOrganisasi';
import InfoOrganisasi from './pages/InfoOrganisasi';
import CariOrganisasi from './pages/CariOrganisasi';
import CariRelawan from './pages/CariRelawan';
import CariProyek from './pages/CariProyek';
import Success from './components/Success';
import RequestPasswordReset from './pages/RequestPasswordReset';
import ResetPassword from './pages/ResetPassword';
import DetailProyek from './components/DetailProyek';
import UploadProyekPage from './pages/UploadProyekPage';
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Landingpage pageType="beforeLogin" />} />
        <Route path="/Tentangkami" element={<Tentangkami />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DaftarRelawan" element={<DaftarRelawan />} />
        <Route path="/DaftarOrganisasi" element={<DaftarOrganisasi />} />
        <Route path="/RequestPasswordReset" element={<RequestPasswordReset />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/landing/organisasi" element={<Landingpage pageType="organisasi" />} />
        <Route path="/landing/relawan" element={<Landingpage pageType="relawan" />} />
        <Route path="/Donasi" element={<Donasi />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Dashboardrelawan" element={<Dashboardrelawan />} />
        <Route path="/DashboardOrganisasi" element={<DashboardOrganisasi />} />
        <Route path="/ProfileRelawan" element={<ProfileRelawan />} />
        <Route path="/ProfileOrganisasi" element={<ProfileOrganisasi />} />
        <Route path="/InfoOrganisasi" element={<InfoOrganisasi />} />
        <Route path="/CariProyek" element={<CariProyek />} />
        <Route path="/DetailProyek" element={<DetailProyek />} />
        <Route path="/CariOrganisasi" element={<CariOrganisasi />} />
        <Route path="/CariRelawan" element={<CariRelawan />} />
        <Route path="/success" element={<Success />} />
        <Route path="/UploadProyekPage" element={<UploadProyekPage />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>
    </div>
  );
};

export default App;
