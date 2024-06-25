import React from 'react';
import VolunteerCard from '../components/VolunteerCard';
import { Link } from 'react-router-dom';
import { volunteers } from '../data/relawan'; 

const VolunteerList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-2">Relawan yang berminat bergabung pada organisasi</h1>
      <p className="text-center text-gray-600 mb-8">Pilih relawan sesuai dengan kriteria organisasimu</p>
      {volunteers.map((volunteer, index) => (
        <VolunteerCard
          key={index}
          name={volunteer.name}
          location={volunteer.location}
          skills={volunteer.skills}
        />
      ))}
      <div className="text-center mt-8">
        <Link to="/CariRelawan" className="text-base underline" style={{ color: '#0A65CC' }}>Lihat Relawan Lainnya</Link>
      </div>
    </div>
  );
};

export default VolunteerList;
