import React, { useState } from 'react';
import axios from 'axios';

const AddTypeProduct: React.FC = () => {
  const [typeName, setTypeName] = useState('');
  const [typeDesc, setTypeDesc] = useState('');
  const [message, setMessage] = useState('');

  const handleAddType = async () => {
    try {
      await axios.post('http://localhost:8000/api/product-types', {
        type_name: typeName,
        description: typeDesc,
      });
      setMessage('✅ Tipe produk berhasil ditambahkan');
      setTypeName('');
      setTypeDesc('');
    } catch (err) {
      setMessage('❌ Gagal tambah tipe produk');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Type Product</h2>

      <div className="mb-4">
        <label className="block font-medium">Type Name</label>
        <input
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
          placeholder="Nama Jenis"
          className="w-full border p-2 rounded mb-3"
        />
        <input
          value={typeDesc}
          onChange={(e) => setTypeDesc(e.target.value)}
          placeholder="Deskripsi Jenis"
          className="w-full border p-2 rounded mb-3"
        />
        <button
          onClick={handleAddType}
          className="border border-blue-500 text-blue-500 py-2 px-6 rounded-md"
        >
          Add Type
        </button>
      </div>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default AddTypeProduct;