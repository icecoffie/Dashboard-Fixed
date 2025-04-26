import React, { useState } from 'react';
import Breadcrumb from '../component/Breadcrumb';
import StatCard from '../component/StatCard.tsx';
import Pagination from '../component/Pagination.tsx';
import SearchBar from '../component/SearchBar.tsx';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';

const Transaction = () => {
  const [filter, setFilter] = useState('All');

  const transactionCustomer = [
    {
      id: '#CUST001',
      name: 'John Doe',
      date: '01-01-2025',
      total: '$2,904',
      method: 'CC',
      status: 'Complate',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      date: '01-01-2025',
      total: '$2,904',
      method: 'PayPal',
      status: 'Canceled',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      date: '01-01-2025',
      total: '$2,904',
      method: 'CC',
      status: 'Pending',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      date: '01-01-2025',
      total: '$2,904',
      method: 'Bank',
      status: 'Complate',
    },
    {
      id: '#CUST001',
      name: 'Jane Smith',
      date: '01-01-2025',
      total: '$2,904',
      method: 'CC',
      status: 'Pending',
    },
    {
      id: '#CUST001',
      name: 'Emily Davis',
      date: '01-01-2025',
      total: '$2,904',
      method: 'PayPal',
      status: 'Canceled',
    },
    {
      id: '#CUST001',
      name: 'Jane Smith',
      date: '01-01-2025',
      total: '$2,904',
      method: 'Bank',
      status: 'Complate',
    },
    {
      id: '#CUST001',
      name: 'John Doe',
      date: '01-01-2025',
      total: '$2,904',
      method: 'CC',
      status: 'Complate',
    },
    {
      id: '#CUST001',
      name: 'Emily Davis',
      date: '01-01-2025',
      total: '$2,904',
      method: 'PayPal',
      status: 'Pending',
    },
    {
      id: '#CUST001',
      name: 'Jane Smith',
      date: '01-01-2025',
      total: '$2,904',
      method: 'Bank',
      status: 'Canceled',
    },
  ];
  
  const filteredtransactionCustomer = transactionCustomer.filter((transaksi) => {
    if (filter === 'All') return true;
    return transaksi.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <>
      <Breadcrumb pageName="Transaction" />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <StatCard
          title="Total Revenue"
          value="$350K"
          percentage="10.4%"
          isUp={true}
          previous=""
        />
        <StatCard
          title="Completed Transactions"
          value="10.7K"
          percentage="14.4%"
          isUp={true}
          previous=""
        />
        <StatCard
          title="Pending Transactions"
          value="$120K"
          percentage="8.2%"
          isUp={true}
          previous=""
        />
        <StatCard
          title="Failed Transactions"
          value="540"
          percentage="4.5%"
          isUp={false}
          previous=""
        />
      </div>

      {/* Customers Table */}
      <div className="w-full rounded-sm shadow-md bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* Filter Buttons */}
        <div className="flex justify-between items-center mt-2 space-x-4 p-4">
          <div className="bg-[#EAF4FB] dark:bg-secondaryBrand rounded-[15px] flex p-1">
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
                {item === 'All' ? 'All Order' : item}
              </button>
            ))}
          </div>
          <SearchBar/>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto py-4">
          <table className="w-full table-auto shadow-sm">
            <thead className="bg-stroke dark:bg-secondaryBrand">
              <tr className="text-left text-[15px] font-lato text-secondaryBrand dark:text-white">
                <th className="py-2 px-4">Customer ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Method</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredtransactionCustomer.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-colorborder text-[15px] font-lato text-left bg-white dark:bg-boxdark"
                >
                  <td className="py-3 px-4">{data.id}</td>
                  <td className="py-3 px-4">{data.name}</td>
                  <td className="py-3 px-4">{data.date}</td>
                  <td className="py-3 px-4">{data.total}</td>
                  <td className="py-3 px-4">{data.method}</td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-2">
                    <span
                        className={`w-[6px] h-[6px] rounded-full ${
                          data.status === 'Complate'
                            ? 'bg-success'
                            : data.status === 'Canceled'
                            ? 'bg-error'
                            : 'bg-pending'
                        }`}
                      />
                      {data.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-3">
                    <a className='text-presentase'>View Details</a>
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

export default Transaction;
