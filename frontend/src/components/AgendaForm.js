import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AgendaForm({ editId, setEditId, onAgendaUpdated }) { // Menerima onNewsUpdated
  const [formData, setFormData] = useState({
    nama_agenda: '',
    tgl_mulai: ''
  });

  useEffect(() => {
    if (editId) {
      axios.get(`http://localhost:5000/api/agenda/${editId}`)
        .then((res) => {
          setFormData({
            nama_agenda: res.data.nama_agenda,
            tgl_mulai: res.data.tgl_mulai
          });
        })
        .catch((error) => {
          console.error('Failed to fetch agenda for edit:', error);
        });
    } else {
      // Reset form data jika editId menjadi null
      setFormData({ nama_agenda: '', tgl_mulai: '' });
    }
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/agenda/${editId}`, formData);
        console.log('Berita berhasil diperbarui');
      } else {
        await axios.post('http://localhost:5000/api/agenda', formData);
        console.log('Berita berhasil ditambahkan');
      }
      setEditId(null); // Reset editId setelah submit
      onAgendaUpdated(); // Panggil fungsi untuk memuat ulang daftar agenda
      setFormData({ title: '', content: '' }); // Reset form setelah berhasil
    } catch (error) {
      console.error('Failed to save agenda:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama Agenda:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tgl Mulai:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{editId ? 'Update' : 'Tambah'} Agenda</button>
    </form>
  );
}

export default AgendaForm;