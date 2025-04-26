import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import React, { useState } from 'react';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 24;
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <>
      {/* Pagination Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mt-4 py-4 w-full px-2 md:px-4 gap-3 md:gap-0">
        {/* Previous */}
        <div className="w-full md:w-1/3">
          <button
            disabled={activePage === 1}
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
            className="w-full md:w-auto px-3 py-2 bg-white shadow-md text-black font-lato text-sm md:text-[15px] rounded-md flex justify-center md:justify-start items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiChevronLeft className="w-4 h-4" />
            Previous
          </button>
        </div>

        {/* Page Numbers */}
        <div className="w-full md:w-1/3 flex justify-center overflow-x-auto">
          <nav className="inline-flex items-center space-x-1">
            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => setActivePage(num)}
                className={`px-2 py-1 md:px-3 md:py-2 shadow-md rounded-md text-sm ${
                  num === activePage
                    ? 'bg-surfCrest text-secondaryBrand font-bold'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {num}
              </button>
            ))}
            <span className="px-2 py-1 text-gray-400">...</span>
            <button
              onClick={() => setActivePage(totalPages)}
              className={`px-2 py-1 md:px-3 md:py-2 shadow-md rounded-md text-sm ${
                activePage === totalPages
                  ? 'bg-surfCrest text-secondaryBrand font-bold'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {totalPages}
            </button>
          </nav>
        </div>

        {/* Next */}
        <div className="w-full md:w-1/3 flex justify-end">
          <button
            disabled={activePage === totalPages}
            onClick={() =>
              setActivePage((prev) => Math.min(prev + 1, totalPages))
            }
            className="w-full md:w-auto px-3 py-2 bg-white shadow-md text-black font-lato text-sm md:text-[15px] rounded-md flex justify-center md:justify-end items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <HiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
