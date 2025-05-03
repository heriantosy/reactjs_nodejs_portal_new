import React, { useState } from 'react';
import Home from './components/Home';
import News from './components/News';
import Agenda from './components/Agenda';
import Profile from './components/Profile';
import ContactUs from './components/ContactUs';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [editId, setEditId] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
    setEditId(null);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Portal Rumah Sakit UHTP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activePage === 'home' ? 'fw-bold' : ''}`}
                  onClick={() => handlePageChange('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-white ${activePage === 'news' ? 'fw-bold' : ''}`}
                  onClick={() => handlePageChange('news')}
                >
                  News
                </button>
              </li>
              {/* Dropdown for Profil */}
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle btn btn-link text-white ${activePage.includes('profile') ? 'fw-bold' : ''}`}
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profil
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <button
                      className={`dropdown-item ${activePage === 'profile-about' ? 'active' : ''}`}
                      onClick={() => handlePageChange('profile-about')}
                    >
                      Tentang Kami
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item ${activePage === 'profile-doctors' ? 'active' : ''}`}
                      onClick={() => handlePageChange('profile-doctors')}
                    >
                      Dokter Kami
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item ${activePage === 'profile-services' ? 'active' : ''}`}
                      onClick={() => handlePageChange('profile-services')}
                    >
                      Layanan Kami
                    </button>
                  </li>
                </ul>
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

      {/* Content */}
      <div className="container mt-4">
        {activePage === 'home' && <Home />}
        {activePage === 'news' && <News setEditId={setEditId} />}
        {activePage === 'agenda' && <Agenda setEditId={setEditId} />}
        {activePage === 'contact' && <ContactUs />}
        
        {/* Profil dropdown content */}
        {activePage === 'profile-about' && <Profile section="about" />}
        {activePage === 'profile-doctors' && <Profile section="doctors" />}
        {activePage === 'profile-services' && <Profile section="services" />}
      </div>
    </div>
  );
}

export default App;
