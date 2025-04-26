import { useState, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa';

const categories = [
  { category: 'Electronics', image: 'https://i.pravatar.cc/40' },
  { category: 'Fashion', image: 'https://i.pravatar.cc/41' },
  { category: 'Accessories', image: 'https://i.pravatar.cc/42' },
  { category: 'Home & Kitchen', image: 'https://i.pravatar.cc/43' },
  { category: 'Sports & Outdoors', image: 'https://i.pravatar.cc/44' },
  { category: 'Toys & Games', image: 'https://i.pravatar.cc/45' },
  { category: 'Health & Fitness', image: 'https://i.pravatar.cc/46' },
  { category: 'Books', image: 'https://i.pravatar.cc/47' },
  { category: 'Groceries', image: 'https://i.pravatar.cc/48' },
  { category: 'Beauty', image: 'https://i.pravatar.cc/49' },
  { category: 'Automotive', image: 'https://i.pravatar.cc/50' },
  { category: 'Pet Supplies', image: 'https://i.pravatar.cc/51' },
];

const CardCategory = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 4 : 4;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const currentItems = categories.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="bg-white shadow-md rounded-full px-3 py-3 disabled:opacity-40"
        >
          <FaChevronLeft className="text-secondaryBrand" />
        </button>

        <div className="grid grid-cols-4 gap-5 w-full">
          {currentItems.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg p-3 shadow-md bg-white text-black"
            >
              <img
                src={category.image}
                alt={category.category}
                className="w-14 h-14 object-contain rounded-sm shadow-md"
              />
              <div className="font-semibold text-[14px]">
                {category.category}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={page >= totalPages - 1}
          className="bg-white shadow-md rounded-full px-3 py-3 disabled:opacity-40"
        >
          <FaChevronRight className="text-secondaryBrand" />
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
          {currentItems.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg p-3 shadow-md bg-white text-black"
            >
              <img
                src={category.image}
                alt={category.category}
                className="w-14 h-14 object-contain rounded-sm shadow-md"
              />
              <div className="font-semibold text-[14px]">
                {category.category}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="bg-white shadow-md rounded-full px-3 py-3 disabled:opacity-40"
          >
            <FaChevronLeft className="text-secondaryBrand" />
          </button>
          <button
            onClick={nextPage}
            disabled={page >= totalPages - 1}
            className="bg-white shadow-md rounded-full px-3 py-3 disabled:opacity-40"
          >
            <FaChevronRight className="text-secondaryBrand" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
