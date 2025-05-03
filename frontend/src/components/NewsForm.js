import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsForm({ editId, setEditId, onNewsUpdated }) { // Menerima onNewsUpdated
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    if (editId) {
      axios.get(`http://localhost:5000/api/news/${editId}`)
        .then((res) => {
          setFormData({
            title: res.data.title,
            content: res.data.content
          });
        })
        .catch((error) => {
          console.error('Failed to fetch news for edit:', error);
        });
    } else {
      // Reset form data jika editId menjadi null
      setFormData({ title: '', content: '' });
    }
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/news/${editId}`, formData);
        console.log('Berita berhasil diperbarui');
      } else {
        await axios.post('http://localhost:5000/api/news', formData);
        console.log('Berita berhasil ditambahkan');
      }
      setEditId(null); // Reset editId setelah submit
      onNewsUpdated(); // Panggil fungsi untuk memuat ulang daftar berita
      setFormData({ title: '', content: '' }); // Reset form setelah berhasil
    } catch (error) {
      console.error('Failed to save news:', error);
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
        <label>Judul:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Konten:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{editId ? 'Update' : 'Tambah'} Berita</button>
    </form>
  );
}

export default NewsForm;