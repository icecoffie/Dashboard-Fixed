import React, { useState } from 'react';
import Breadcrumb from '../component/Breadcrumb';
import { FiMoreVertical } from 'react-icons/fi';
import Pagination from '../component/Pagination.tsx';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  HiOutlineChatAlt2,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';

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

const CustomerDetails = () => {
  const [customers] = useState([
    {
      id: '#CUST001',
      name: 'John Doe',
      phone: '+1234567890',
      orderCount: 25,
      totalSpend: 3450.0,
      status: 'Active',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      phone: '+1234567890',
      orderCount: 25,
      totalSpend: 3450.0,
      status: 'Active',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      phone: '+1234567890',
      orderCount: 25,
      totalSpend: 3450.0,
      status: 'Active',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      phone: '+1234567890',
      orderCount: 25,
      totalSpend: 3450.0,
      status: 'Active',
    },
    {
      id: '#CUST001',
      name: 'Jane Smith',
      phone: '+1234567890',
      orderCount: 5,
      totalSpend: 250.0,
      status: 'Inactive',
    },
    {
      id: '#CUST001',
      name: 'Emily Davis',
      phone: '+1234567890',
      orderCount: 30,
      totalSpend: 4600.0,
      status: 'VIP',
    },
    {
      id: '#CUST001',
      name: 'Jane Smith',
      phone: '+1234567890',
      orderCount: 5,
      totalSpend: 250.0,
      status: 'Inactive',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      phone: '+1234567890',
      orderCount: 25,
      totalSpend: 3450.0,
      status: 'Active',
    },
    {
      id: '#CUST001',
      name: 'Emily Davis',
      phone: '+1234567890',
      orderCount: 30,
      totalSpend: 4600.0,
      status: 'VIP',
    },
    {
      id: '#CUST001',
      name: 'Jane Smith',
      phone: '+1234567890',
      orderCount: 5,
      totalSpend: 250.0,
      status: 'Inactive',
    },
  ]);

  return (
    <>
      <Breadcrumb pageName="Customer" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Customers"
          value="11,040"
          percentage="+14.4%"
          trend="up"
        />
        <StatCard
          title="New Customers"
          value="2,370"
          percentage="+20%"
          trend="up"
        />
      </div>
      <div className="my-3 p-2">
        <h1 className="text-md text-black dark:text-white font-semibold">
          Customer Details
        </h1>
        <div className="overflow-x-auto py-4">
          <table className="w-full table-auto shadow-sm">
            <thead className="bg-stroke dark:bg-secondaryBrand">
              <tr className="text-left text-[15px] font-lato text-secondaryBrand dark:text-white">
                <th className="py-2 px-4">Customer Id</th>
                <th className="py-2 px-4">Nama</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">Order Count</th>
                <th className="py-2 px-4">Total Spend</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-colorborder text-left bg-white  dark:bg-boxdark  items-center justify-center"
                >
                  <td className="py-3 px-4 text-[15px] font-lato text-black">
                    {data.id}
                  </td>
                  <td className="py-3 px-4 text-[15px] font-lato text-black">
                    {data.name}
                  </td>
                  <td className="py-3 px-4 text-[15px] font-lato text-black">
                    {data.phone}
                  </td>
                  <td className="py-3 px-4 text-[15px] font-lato text-black">
                    {data.orderCount}
                  </td>
                  <td className="py-3 px-4 text-[15px] font-lato text-black">
                    {data.totalSpend}
                  </td>
                  <td className="py-3 px-4 text-[15px] font-lato text-black">
                    <span
                      className={`text-[15px] font-lato flex items-center gap-2`}
                    >
                      <span
                        className={`w-[6px] h-[6px] rounded-full ${
                          data.status === 'Active'
                            ? 'bg-success'
                            : data.status === 'Inactive'
                            ? 'bg-error'
                            : data.status === 'VIP'
                            ? 'bg-pending'
                            : ''
                        }`}
                      ></span>
                      {data.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex justify-center gap-3 text-black text-lg">
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
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
