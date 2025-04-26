import React, { useState } from 'react';
import Breadcrumb from '../component/Breadcrumb';
import { FiMoreVertical } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';
import CardCategories from '../component/CardCategory.tsx';
import Pagination from '../component/Pagination';
import SearchBar from '../component/SearchBar.tsx';

const Categories = () => {
  const [orders] = useState([
    {
      product: 'Wireless Bluetooth Headphones',
      createddate: '01-01-2025',
      order: 49.99,
      image: 'https://i.pravatar.cc/40',
    },
    {
      product: 'Smartwatch X2',
      createddate: '03-01-2025',
      order: 89.99,
      image: 'https://i.pravatar.cc/41',
    },
    {
      product: 'Noise Cancelling Earbuds',
      createddate: '04-01-2025',
      order: 39.99,
      image: 'https://i.pravatar.cc/42',
    },
    {
      product: 'Gaming Headset Pro',
      createddate: '06-01-2025',
      order: 59.99,
      image: 'https://i.pravatar.cc/43',
    },
  ]);

  return (
    <>
      <Breadcrumb pageName="Categories" />

      <div className="flex justify-end items-center font-lato py-3 gap-4">
        <button className="px-6 py-2 flex items-center gap-2 text-blue-600 hover:bg-primaryBrand hover:text-white text-secondaryBrand shadow-md bg-white rounded-[10px] hover:bg-blue-50 transition">
          <GoPlusCircle /> Add Order
        </button>
      </div>

      <div className="my-4 p-3 rounded-md">
        <CardCategories />
      </div>

      {/* ====== Categories Table ===== */}
      <div className="w-full max-w-full mt-8 rounded-sm shadow-md bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-end items-center space-x-4 p-4">
          <SearchBar />
        </div>

        <div className="overflow-x-auto p-4 mt-2 rounded-md">
          <table className="w-full table-auto">
            <thead className="bg-stroke dark:bg-secondaryBrand">
              <tr className="text-left text-[15px] font-lato text-secondaryBrand dark:text-white">
                <th className="py-2 px-4">No.</th>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Created Date</th>
                <th className="py-2 px-4">Order</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((categories, index) => (
                <tr
                  key={index}
                  className="border-b border-colorborder text-black text-[15px] font-lato"
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-3 px-4 flex gap-2 items-center">
                    <img
                      src={categories.image}
                      alt={categories.product}
                      className="w-10 h-10 rounded"
                    />
                    {categories.product}
                  </td>
                  <td className="py-2 px-4">{categories.createddate}</td>
                  <td className="py-2 px-4">${categories.order.toFixed(2)}</td>
                  <td className="py-3 px-4 flex gap-3 text-black text-lg">
                    <button title="Chat">
                      <HiOutlineChatAlt2 className="hover:text-blue-600 transition-colors duration-200" />
                    </button>
                    <button title="Delete">
                      <MdDeleteOutline className="hover:text-red-600 transition-colors duration-200" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default Categories;
