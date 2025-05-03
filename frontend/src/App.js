import React, { useState } from 'react';
import News from './components/News';
import Agenda from './components/Agenda';
import Profile from './components/Profile';
import ContactUs from './components/ContactUs';

function App() {
  const [activePage, setActivePage] = useState('news');
  const [editId, setEditId] = useState(null); // Simpan ID yang sedang diedit untuk NewsForm

  // Handle perubahan halaman dan highlight halaman aktif
  const handlePageChange = (page) => {
    setActivePage(page);
    setEditId(null); // Reset editId saat berpindah halaman
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activePage === 'news' ? 'fw-bold' : ''}`}
                  onClick={() => handlePageChange('news')}
                >
                  News
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activePage === 'profile' ? 'fw-bold' : ''}`}
                  onClick={() => handlePageChange('profile')}
                >
                  Profil
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activePage === 'contact' ? 'fw-bold' : ''}`}
                  onClick={() => handlePageChange('contact')}
                >
                  Hubungi Kami
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activePage === 'agenda' ? 'fw-bold' : ''}`}
                  onClick={() => handlePageChange('agenda')}
                >
                  Agenda
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Konten */}
      <div className="container mt-4">
        {activePage === 'news' && <News setEditId={setEditId} />}
        {activePage === 'profile' && <Profile />}
        {activePage === 'contact' && <ContactUs />}
        {activePage === 'agenda' && <Agenda setEditId={setEditId} />}
      </div>
    </div>
  );
}

export default App;