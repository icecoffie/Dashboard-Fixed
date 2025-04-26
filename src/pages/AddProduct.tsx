import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  // const [currency, setCurrency] = useState('IDR');
  const [stockQuantity, setStockQuantity] = useState('');
  // const [stockStatus, setStockStatus] = useState('');
  const [highlightProduct, setHighlightProduct] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [productCategory, setProductCategory] = useState('');
  const [productTag, setProductTag] = useState('');
  // const [selectedColor, setSelectedColor] = useState('');
  const [isDraft, setIsDraft] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('product_name', productName);
    formData.append('product_description', productDescription);
    formData.append('sale_price', productPrice);
    formData.append('is_highlight', highlightProduct ? '1' : '0');
    formData.append('is_drafted', isDraft ? '1' : '0');
    formData.append('supplier_id', '1'); // sementara
    formData.append('category_id', '1'); // sementara
    formData.append('type_id', '1'); // sementara
    formData.append('updated_by', 'admin'); // bisa diambil dari auth user
    if (image) {
      formData.append('product_image', image);
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/products',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('✅ Product saved:', response.data);
      alert('Product saved successfully!');
    } catch (error: any) {
      console.error(
        '❌ Error saving product:',
        error.response?.data || error.message,
      );
      alert('Failed to save product.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-lg">Upload Product Image</label>
          {!preview ? (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            />
          ) : (
            <div className="w-full">
              <img
                src={preview}
                alt="Product Preview"
                className="w-full h-auto mb-2"
              />
              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
                className="text-blue-500 underline"
              >
                Change Image
              </button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <label className="block text-lg">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            required
          />

          <label className="block text-lg">Product Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            required
          />
        </div>

        {/* Price & Currency */}
        <div className="space-y-2">
          <label className="block text-lg">Product Price</label>
          <div className="flex space-x-4">
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
              required
            />
            {/* <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
              required
            >
              <option value="IDR">IDR</option>
              <option value="USD">USD</option>
            </select> */}
          </div>
        </div>

        {/* Inventory */}
        <div className="space-y-2">
          <label className="block text-lg">Stock Quantity</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            required
          />

          {/* <label className="block text-lg">Stock Status</label>
          <select
            value={stockStatus}
            onChange={(e) => setStockStatus(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            required
          >
            <option value="">Select Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select> */}
        </div>

        {/* Flags */}
        <div className="flex items-center space-x-4">
          <label className="text-lg">Highlight Product</label>
          <input
            type="checkbox"
            checked={highlightProduct}
            onChange={() => setHighlightProduct(!highlightProduct)}
          />
          <label className="text-lg">Unlimited Stock</label>
          <input type="checkbox" onChange={() => setStockQuantity('')} />
        </div>

        {/* Category, Tag, Color */}
        <div className="space-y-2">
          <label className="block text-lg">Product Categories</label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            required
          />

          <label className="block text-lg">Product Tag</label>
          <input
            type="text"
            value={productTag}
            onChange={(e) => setProductTag(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full dark:bg-boxdark"
            required
          />

          {/*<label className="block text-lg">Select Color</label>
          <div className="flex space-x-4">
            {['blue', 'black', 'pink'].map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={w-10 h-10 rounded-full bg-${color}-500 border-2 border-gray-300}
              />
            ))}
          </div>*/}
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setIsDraft(true)}
            className="border border-blue-500 text-blue-500 py-2 px-6 rounded-md"
          >
            Save to Draft
          </button>
          <button
            type="submit"
            className="border border-blue-500 text-blue-500 py-2 px-6 rounded-md"
          >
            Publish Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
