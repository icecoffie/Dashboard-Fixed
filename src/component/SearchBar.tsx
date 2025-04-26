import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-sm bg-gray rounded-xl px-4 py-2 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
      />
      <FiSearch className="text-gray-500" size={18} />
    </div>
  );
};

export default SearchBar;
