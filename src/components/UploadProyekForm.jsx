import React, { useState } from 'react';
import { IoImage } from "react-icons/io5";
import SuccessUploadProject from './SuccessUploadProject'; 

const UploadProyekForm = () => {
  
  const [gambarProyek, setGambarProyek] = useState(null);
  const [logoOrganisasi, setLogoOrganisasi] = useState(null);
  
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  const [judulProyek, setJudulProyek] = useState('');
  const [fokusProyek, setFokusProyek] = useState('');
  const [kalimatAjakan, setKalimatAjakan] = useState('');
  const [batasPendaftaran, setBatasPendaftaran] = useState('');

  const [tipeProyek, setTipeProyek] = useState('');
  const [relawanDibutuhkan, setRelawanDibutuhkan] = useState('');
  const [totalJamKerja, setTotalJamKerja] = useState('');
  const [alamatProyek, setAlamatProyek] = useState('');
  const [tugasRelawan, setTugasRelawan] = useState('');
  const [kriteriaRelawan, setKriteriaRelawan] = useState('');

  const [namaOrganisasi, setNamaOrganisasi] = useState('');
  const [noTelepon, setNoTelepon] = useState('');
  const [jenisOrganisasi, setJenisOrganisasi] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (currentStep === 1) {
      console.log({
        judulProyek,
        fokusProyek,
        kalimatAjakan,
        batasPendaftaran,
      });
    } else if (currentStep === 2) {
      console.log({
        tipeProyek,
        relawanDibutuhkan,
        totalJamKerja,
        alamatProyek,
        tugasRelawan,
        kriteriaRelawan,
        gambarProyek,
      });
    } else if (currentStep === 3) {
      console.log({
        namaOrganisasi,
        noTelepon,
        jenisOrganisasi,
        logoOrganisasi,
      });
  
      setIsUploadSuccess(true);
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setGambarProyek(file);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogoOrganisasi(file);
  };

  const handleCloseSuccess = () => {
    setIsUploadSuccess(false);
    window.location.reload(); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">Upload Proyek</h1>
  
        {isUploadSuccess ? (
          <SuccessUploadProject onClose={handleCloseSuccess} />
        ) : (
          <>
            
            <div className="flex justify-between mb-8">
              <div className={`flex-1 text-center ${currentStep === 1 ? 'font-bold' : ''}`}>Informasi Utama</div>
              <div className={`flex-1 text-center ${currentStep === 2 ? 'font-bold' : ''}`}>Informasi Proyek & Kriteria Relawan</div>
              <div className={`flex-1 text-center ${currentStep === 3 ? 'font-bold' : ''}`}>Informasi Kontak Organisasi</div>
            </div>
  
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              
              {currentStep === 1 && (
                <>
                  <h2 className="text-xl font-semibold mb-2">Step 1</h2>
                  <p className="text-lg font-medium mb-6">Informasi Utama</p>
                  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Judul Proyek</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={judulProyek} 
                      onChange={(e) => setJudulProyek(e.target.value)}
                      placeholder="Judul proyek..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Fokus Proyek</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={fokusProyek} 
                      onChange={(e) => setFokusProyek(e.target.value)}
                      placeholder="Fokus proyek..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Kalimat Ajakan</label>
                    <textarea 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={kalimatAjakan} 
                      onChange={(e) => setKalimatAjakan(e.target.value)}
                      placeholder="Buat kalimat yang menarik dengan kesan ajakan..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Batas Pendaftaran</label>
                    <input 
                      type="date" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={batasPendaftaran} 
                      onChange={(e) => setBatasPendaftaran(e.target.value)}
                      placeholder="Masukkan batas pendaftaran"
                    />
                  </div>
  
                  
                  <div className="flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNextStep} 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </>
              )}
  
              
              {currentStep === 2 && (
                <>
                  <h2 className="text-xl font-semibold mb-2">Step 2</h2>
                  <p className="text-lg font-medium mb-6">Informasi Proyek & Kriteria Relawan</p>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tipe Proyek</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={tipeProyek} 
                      onChange={(e) => setTipeProyek(e.target.value)}
                      placeholder="Tipe proyek..."
                    />
                  </div>
  
                 
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Relawan Dibutuhkan</label>
                    <input 
                      type="number" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={relawanDibutuhkan} 
                      onChange={(e) => setRelawanDibutuhkan(e.target.value)}
                      placeholder="Jumlah relawan dibutuhkan..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Total Jam Kerja</label>
                    <input 
                      type="number" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={totalJamKerja} 
                      onChange={(e) => setTotalJamKerja(e.target.value)}
                      placeholder="Total jam kerja..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Alamat Proyek</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={alamatProyek} 
                      onChange={(e) => setAlamatProyek(e.target.value)}
                      placeholder="Alamat proyek..."
                    />
                  </div>
  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tugas Relawan</label>
                    <textarea 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={tugasRelawan} 
                      onChange={(e) => setTugasRelawan(e.target.value)}
                      placeholder="Tugas relawan..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Kriteria Relawan</label>
                    <textarea 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={kriteriaRelawan} 
                      onChange={(e) => setKriteriaRelawan(e.target.value)}
                      placeholder="Kriteria relawan..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Upload Gambar Proyek</label>
                    <div className="flex items-center">
                      
                      {gambarProyek ? (
                        <img
                          src={URL.createObjectURL(gambarProyek)}
                          alt="Preview"
                          className="w-20 h-20 mr-2 rounded border"
                        />
                      ) : (
                        <IoImage className="w-20 h-20 mr-2 text-blue-500" />
                      )}
                      
                      <input 
                        type="file" 
                        className="border rounded py-2 px-3 text-gray-700"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
  
                  
                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      onClick={handlePreviousStep} 
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Sebelumnya
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNextStep} 
                      className="bg-[#0A65CC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </>
              )}
  
              
              {currentStep === 3 && (
                <>
                  <h2 className="text-xl font-semibold mb-2">Step 3</h2>
                  <p className="text-lg font-medium mb-6">Informasi Kontak Organisasi</p>
  
                  {/* Input untuk nama organisasi */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nama Organisasi</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={namaOrganisasi} 
                      onChange={(e) => setNamaOrganisasi(e.target.value)}
                      placeholder="Nama organisasi..."
                    />
                  </div>
  
                  {/* Input untuk nomor telepon */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nomor Telepon</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={noTelepon} 
                      onChange={(e) => setNoTelepon(e.target.value)}
                      placeholder="Nomor telepon..."
                    />
                  </div>
  
                  {/* Input untuk jenis organisasi */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Jenis Organisasi</label>
                    <input 
                      type="text" 
                      className="border rounded w-full py-2 px-3 text-gray-700"
                      value={jenisOrganisasi} 
                      onChange={(e) => setJenisOrganisasi(e.target.value)}
                      placeholder="Jenis organisasi..."
                    />
                  </div>
  
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Upload Logo Organisasi</label>
                    <div className="flex items-center">
                      
                      {logoOrganisasi ? (
                        <img
                          src={URL.createObjectURL(logoOrganisasi)}
                          alt="Preview"
                          className="w-20 h-20 mr-2 rounded-full border"
                        />
                      ) : (
                        <IoImage className="w-20 h-20 mr-2 text-blue-500" />
                      )}
                      
                      <input 
                        type="file" 
                        className="border rounded py-2 px-3 text-gray-700"
                        onChange={handleLogoChange}
                      />
                    </div>
                  </div>
  
                  
                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      onClick={handlePreviousStep} 
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Sebelumnya
                    </button>
                    <button 
                      type="submit" 
                      className="bg-[#0A65CC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Kirim
                    </button>
                  </div>
                </>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadProyekForm;
