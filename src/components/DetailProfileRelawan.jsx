import React from 'react';
import { useParams } from 'react-router-dom';
import blog1 from '../assets/blog1.png';
import iconuser from '../assets/iconuser.png';
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { volunteers } from '../data/relawan'; 

const DetailProfileRelawan = () => {
  const { name } = useParams();
  const relawan = volunteers.find(vol => vol.name === decodeURIComponent(name));

  if (!relawan) {
    return <p>Relawan tidak ditemukan</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-left text-gray-800 pt-16 mb-6">Hallo Selamat Datang</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={blog1} 
              alt="Background" 
              className="w-full h-48 object-cover"
            />
            <div className="flex justify-center mt-4">
              <img 
                src={iconuser} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-gray-800">{relawan.name}</h2>
              <p className="text-gray-600 mb-2">{relawan.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <h3 className="text-xl font-semibold mb-4">Bio</h3>
            <p>Perkenalkan nama saya {relawan.name} sering dipanggil {relawan.name.split(' ')[1]}, saya merupakan mahasiswa semester 7 di Universitas Gajah Mada. Kegiatan saya dikampus mengikuti organisasi Himpunan yang dimana saya cukup mengenal banyak pengetahuan disana dan mempunyai banyak teman. Dan saya juga disini ingin mengisi waktu luang saya untuk mengikuti proyek yang tersedia pada beberapa organisasi nirlaba.</p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Keahlian</h3>
            <p>{relawan.skills}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Kontak Saya</h3>
            <div className="flex items-center mb-4">
              <TfiEmail className="w-6 h-6 " />
              <p className="ml-4">{relawan.email}</p>
            </div>
            <div className="flex items-center mb-4">
              <IoLocationOutline className="w-6 h-6 " />
              <p className="ml-4">{relawan.address}</p>
            </div>
            <div className="flex items-center mb-4">
              <FiPhone className="w-6 h-6 " />
              <p className="ml-4">{relawan.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfileRelawan;
