import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import Pagination from '../component/Pagination.tsx';
import SearchBar from '../component/SearchBar.tsx';
import Breadcrumb from '../component/Breadcrumb';
import { GoPlusCircle } from 'react-icons/go';

type StatCardProps = {
  title: string;
  value: string;
  percentage: string;
  trend: 'up' | 'down';
};

function StatCard({ title, value, percentage, trend }: StatCardProps) {
  return (
    <div className="flex flex-1 flex-col justify-between  rounded-xl bg-white p-5 shadow-md dark:border-gray-700 dark:bg-boxdark">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold font-lato text-black dark:text-white leading-none">
          {title}
        </h4>
        <FiMoreVertical className="text-gray-400" />
      </div>
      <div className="flex items-end gap-3">
        <p className="mt-1 text-2xl font-semibold font-lato text-secondaryBrand dark:text-white">
          {value}
        </p>
        <span
          className={`flex items-center gap-1 text-md font-lato ${
            trend === 'up' ? 'text-presentase' : 'text-error'
          }`}
        >
          {trend === 'up' ? (
            <FaArrowUp className="text-[10px]" />
          ) : (
            <FaArrowDown className="text-[10px]" />
          )}
          {percentage}
        </span>
      </div>
      <div className="mt-4 items-center text-sm text-gray-500 dark:text-gray-400">
        <span>Last 7 days</span>
      </div>
    </div>
  );
}

const OrderManagement = () => {
  // Sample data for orders
  const [orders] = useState([
    {
      id: '#ORD0001',
      product: 'Wireless Bluetooth Headphones',
      date: '01-01-2025',
      price: 49.99,
      payment: 'Paid',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0002',
      product: 'Men’s T-Shirt',
      date: '01-01-2025',
      price: 14.99,
      payment: 'Unpaid',
      status: 'Pending',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0003',
      product: 'Men’s Leather Wallet',
      date: '01-01-2025',
      price: 49.99,
      payment: 'Paid',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0004',
      product: 'Memory Foam Pillow',
      date: '01-01-2025',
      price: 39.99,
      payment: 'Paid',
      status: 'Shipped',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0005',
      product: 'Adjustable Dumbbells',
      date: '01-01-2025',
      price: 14.99,
      payment: 'Unpaid',
      status: 'Pending',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0006',
      product: 'Coffee Maker',
      date: '01-01-2025',
      price: 79.99,
      payment: 'Unpaid',
      status: 'Cancelled',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0007',
      product: 'Casual Baseball Cap',
      date: '01-01-2025',
      price: 49.99,
      payment: 'Paid',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0008',
      product: 'Full HD Webcam',
      date: '01-01-2025',
      price: 39.99,
      payment: 'Paid',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0009',
      product: 'Smart LED Color Bulb',
      date: '01-01-2025',
      price: 79.99,
      payment: 'Unpaid',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/40',
    },
    {
      id: '#ORD0010',
      product: 'Men’s T-Shirt',
      date: '01-01-2025',
      price: 14.99,
      payment: 'Unpaid',
      status: 'Delivered',
      image: 'https://i.pravatar.cc/40',
    },
  ]);

  // Filter state
  const [filter, setFilter] = useState('All');

  // Filter orders based on selected filter
  const filteredOrders = orders.filter((order) => {
    if (filter === 'All') return true;
    return order.status.toLowerCase() === filter.toLowerCase();
  });
  return (
    <>
      <Breadcrumb pageName="Order Management" />
      <div className="flex justify-end font-lato py-3 gap-4">
        <button className="px-6 py-2 flex items-center gap-2 text-blue-600 hover:bg-primaryBrand hover:text-white text-secondaryBrand shadow-md bg-white rounded-[10px] hover:bg-blue-50 transition">
          <GoPlusCircle /> Add Order
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Orders"
          value="1,240"
          percentage="14.4%"
          trend="up"
        />
        <StatCard title="New Orders" value="240" percentage="20%" trend="up" />
        <StatCard
          title="Completed Orders"
          value="960"
          percentage="20%"
          trend="up"
        />
        <StatCard
          title="Canceled Orders"
          value="87"
          percentage="5%"
          trend="down"
        />
      </div>
      {/* ====== Order Management Section Start ====== */}
      <div className="w-full max-w-full mt-3 rounded-sm  shadow-md bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Filter Section */}
        <div className="flex justify-between items-center space-x-4 p-4 ">
          <div className="bg-[#EAF4FB] dark:bg-secondaryBrand rounded-[8px] flex p-1">
            {['All', 'Completed', 'Pending', 'Cancelled'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  filter === item
                    ? 'bg-white text-black shadow-sm'
                    : 'text-subtleText'
                }`}
              >
                {item === 'All' ? `All Orders` : item}
              </button>
            ))}
          </div>
          <SearchBar/>
        </div>

        {/* Order Table */}
        <div className="overflow-x-auto p-4 mt-2 rounded-md">
          <table className="w-full table-auto">
            <thead className="bg-stroke dark:bg-secondaryBrand">
              <tr className="text-left text-[15px] font-lato text-secondaryBrand dark:text-white">
                <th className="py-2 px-4">No.</th>
                <th className="py-2 px-4">Order Id</th>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Payment</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-colorborder text-black text-[15px] font-lato"
                >
                  <td className="py-2 px-4 font-[15px] font-lato">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 font-[15px] font-lato">
                    {order.id}
                  </td>
                  <td className="py-3 px-4 text-[15px] flex gap-2 items-center font-lato text-black">
                    <img
                      src={order.image}
                      alt={order.product}
                      className="w-10 h-10 rounded"
                    />
                    {order.product}
                  </td>
                  <td className="py-2 px-4 font-[15px] font-lato">
                    {order.date}
                  </td>
                  <td className="py-2 px-4 font-[15px] font-lato">
                    ${order.price}
                  </td>
                  <td className="py-2 px-4 font-[15px] font-lato">
                    <span className={`font-medium flex items-center gap-2`}>
                      <span
                        className={`w-[6px] h-[6px] rounded-full ${
                          order.payment === 'Paid' ? 'bg-success' : 'bg-error'
                        }`}
                      ></span>
                      {order.payment}
                    </span>
                  </td>
                  <td className="py-2 px-4 font-[15px] font-lato">
                    <span
                      className={`font-medium font lato ${
                        order.status === 'Delivered'
                          ? 'text-success'
                          : order.status === 'Pending'
                          ? 'text-pending'
                          : order.status === 'Cancelled'
                          ? 'text-error'
                          : 'text-black'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
      {/* ====== Order Management Section End ====== */}
    </>
  );
};

export default OrderManagement;
