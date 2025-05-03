import React from 'react';
import { FaHospital, FaUserMd, FaAmbulance, FaHeartbeat, FaStethoscope, FaRegSmile } from 'react-icons/fa';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4 text-primary">
        <FaHospital className="me-2" />
        Selamat Datang di Rumah Sakit Universitas Hang Tuah Pekanbaru
      </h2>
      
      <img 
        src="/images/gedung1.jpeg" 
        alt="Gedung Rumah Sakit" 
        className="img-fluid mb-4 shadow rounded"
        style={{ maxWidth: '600px', borderRadius: '16px' }}
      />

      <p className="lead text-muted">
        Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan dukungan tenaga medis profesional, teknologi mutakhir, dan pelayanan yang ramah.
      </p>


        {/* Post Berita */}
        <div className="mt-5 text-center">
          <h4 className="text-primary mb-3">Post Berita Terbaru</h4>
          <p className="lead text-muted">Berita terkini seputar rumah sakit dan pelayanan kesehatan.</p>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Post Berita 1 */}
            <div className="col">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Pembaruan Layanan Kesehatan di Rumah Sakit</h5>
                  <p className="card-text">
                    Rumah Sakit Sehat Sentosa terus berkomitmen untuk meningkatkan kualitas layanan kesehatan. Kami baru saja meluncurkan fasilitas baru untuk pasien rawat inap...
                  </p>
                  <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            {/* Post Berita 2 */}
            <div className="col">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Layanan Darurat 24 Jam Semakin Cepat</h5>
                  <p className="card-text">
                    Dengan tambahan tenaga medis dan peralatan medis terbaru, layanan darurat kami kini semakin cepat dalam merespon kebutuhan pasien di situasi darurat...
                  </p>
                  <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
                </div>
              </div>
            </div>

            {/* Post Berita 3 */}
            <div className="col">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Program Vaksinasi Gratis di Rumah Sakit Sehat Sentosa</h5>
                  <p className="card-text">
                    Kami mengadakan program vaksinasi gratis bagi masyarakat umum untuk membantu melawan pandemi dan meningkatkan imunitas komunitas...
                  </p>
                  <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
        </div>



      {/* Layanan Unggulan */}
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <FaUserMd className="text-primary mb-3" size={50} />
              <h5 className="card-title">Dokter Spesialis</h5>
              <p className="card-text">
                Tim dokter berpengalaman di berbagai bidang spesialis siap membantu Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <FaAmbulance className="text-danger mb-3" size={50} />
              <h5 className="card-title">Layanan Darurat 24 Jam</h5>
              <p className="card-text">
                Kami siap melayani kebutuhan darurat Anda kapan saja, 24 jam non-stop.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <FaHospital className="text-success mb-3" size={50} />
              <h5 className="card-title">Fasilitas Modern</h5>
              <p className="card-text">
                Rumah sakit kami dilengkapi fasilitas dan peralatan medis modern untuk kenyamanan pasien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kenapa Memilih Kami */}
      <div className="mt-5">
        <h4 className="text-primary mb-4">Kenapa Memilih Kami?</h4>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaHeartbeat size={50} className="text-danger mb-3" />
              <h6 className="fw-bold">Pelayanan Personal</h6>
              <p className="text-muted text-center">Kami memperlakukan setiap pasien seperti keluarga sendiri dengan perhatian penuh.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaStethoscope size={50} className="text-primary mb-3" />
              <h6 className="fw-bold">Tenaga Medis Handal</h6>
              <p className="text-muted text-center">Dokter & perawat berpengalaman yang terus mengikuti pelatihan terkini.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <FaRegSmile size={50} className="text-success mb-3" />
              <h6 className="fw-bold">Lingkungan Nyaman</h6>
              <p className="text-muted text-center">Fasilitas bersih & suasana nyaman mendukung proses penyembuhan optimal.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5 pt-4 border-top text-muted small">
        &copy; {new Date().getFullYear()} Rumah Sakit Sehat Sentosa. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
