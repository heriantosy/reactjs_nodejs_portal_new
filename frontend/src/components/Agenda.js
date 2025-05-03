import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Agenda() {
  const [agenda, setAgenda] = useState([]);
  const [form, setForm] = useState({ nama_agenda: '', tgl_mulai: '' });
  const [editId, setEditId] = useState(null);

  const getAgenda = async () => {
    const res = await axios.get('http://localhost:5000/api/agenda');
    setAgenda(res.data);
  };

  useEffect(() => {
    getAgenda();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId === null) {
      await axios.post('http://localhost:5000/api/agenda', form);
    } else {
      await axios.put(`http://localhost:5000/api/agenda/${editId}`, form);
      setEditId(null);
    }
    setForm({ nama_agenda: '', tgl_mulai: '' });
    getAgenda();
  };

  const handleEdit = (item) => {
    setForm({ nama_agenda: item.nama_agenda, tgl_mulai: item.tgl_mulai });
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/agenda/${id}`);
    getAgenda();
  };

  return (
    <div className="container mt-4">
      <h2>Agenda</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Nama Agenda"
          value={form.nama_agenda}
          onChange={(e) => setForm({ ...form, nama_agenda: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Tanggal Mulai"
          value={form.tgl_mulai}
          onChange={(e) => setForm({ ...form, tgl_mulai: e.target.value })}
        ></textarea>
        <button className="btn btn-primary" type="submit">
          {editId ? 'Update' : 'Tambah'}
        </button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama Agenda</th>
            <th>Tanggal Mulai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((item) => (
            <tr key={item.id}>
              <td>{item.nama_agenda}</td>
              <td>{item.tgl_mulai}</td>
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

export default Agenda;
