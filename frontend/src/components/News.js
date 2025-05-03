import React, { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const [editId, setEditId] = useState(null);

  const getNews = async () => {
    const res = await axios.get('http://localhost:5000/api/news');
    setNews(res.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId === null) {
      await axios.post('http://localhost:5000/api/news', form);
    } else {
      await axios.put(`http://localhost:5000/api/news/${editId}`, form);
      setEditId(null);
    }
    setForm({ title: '', content: '' });
    getNews();
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, content: item.content });
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/news/${id}`);
    getNews();
  };

  return (
    <div className="container mt-4">
      <h2>Portal Berita</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Judul"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Konten"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>
        <button className="btn btn-primary" type="submit">
          {editId ? 'Update' : 'Tambah'}
        </button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Konten</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default News;
