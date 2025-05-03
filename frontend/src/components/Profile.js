import React from 'react';

function Profile() {
  return (
    <div className="container mt-4">
      <h2>Profil</h2>
      <img 
        src="/images/gedung1.jpeg" 
        alt="Gambar Perusahaan" 
        className="img-fluid mb-3"
        style={{ maxWidth: '400px', borderRadius: '8px' }}
      />
      <p>Ini adalah halaman profil. Tampilkan informasi tentang perusahaan atau pengguna di sini.</p>
    </div>
  );
}

export default Profile;
