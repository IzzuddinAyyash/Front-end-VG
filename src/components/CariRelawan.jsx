import React, { useState } from 'react';
import VolunteerCard from '../components/VolunteerCard';
import { Link } from 'react-router-dom';
import { volunteers } from '../data/relawan';

const CariRelawan = () => {
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchSkill, setSearchSkill] = useState("");
  const [filteredRelawan, setFilteredRelawan] = useState(volunteers);

  const handleSearch = () => {
    const filtered = volunteers.filter(relawan => {
      const nameMatch = relawan.name.toLowerCase().includes(searchName.toLowerCase());
      const locationMatch = relawan.location.toLowerCase().includes(searchLocation.toLowerCase());
      const skillMatch = relawan.skills.toLowerCase().includes(searchSkill.toLowerCase());
      return nameMatch && locationMatch && skillMatch;
    });
    setFilteredRelawan(filtered);
  };

  const handleReset = () => {
    setSearchName("");
    setSearchLocation("");
    setSearchSkill("");
    setFilteredRelawan(volunteers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Cari Relawan</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/3 space-y-4 mt-4 md:mt-0">
            {filteredRelawan.length > 0 ? (
              filteredRelawan.map((relawan, index) => (
                <Link to={`/DetailProfileRelawan/${encodeURIComponent(relawan.name)}`} className="block" key={index}>
                  <VolunteerCard
                    name={relawan.name}
                    location={relawan.location}
                    skills={relawan.skills}
                  />
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600">Tidak ada relawan yang ditemukan.</p>
            )}

            <div className="flex justify-center mt-4">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 rounded-full border bg-white">1</button>
                <button className="px-4 py-2 rounded-full border">2</button>
                <button className="px-4 py-2 rounded-full border">3</button>
                <button className="px-4 py-2 rounded-full border">4</button>
                <button className="px-4 py-2 rounded-full border">5</button>
              </nav>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-4 rounded-md shadow-lg flex-grow">
            <form className="flex flex-col h-full">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="searchName">Nama</label>
                <input
                  type="text"
                  id="searchName"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari inisial nama"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="searchLocation">Lokasi</label>
                <input
                  type="text"
                  id="searchLocation"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari berdasarkan lokasi"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="searchSkill">Keahlian</label>
                <input
                  type="text"
                  id="searchSkill"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari berdasarkan keahlian"
                  value={searchSkill}
                  onChange={(e) => setSearchSkill(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="button"
                  className="w-full bg-[#0A65CC] text-white py-2 rounded-md"
                  onClick={handleSearch}
                >
                  Cari
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full bg-[#0A65CC] text-white py-2 rounded-md mt-4"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CariRelawan;
