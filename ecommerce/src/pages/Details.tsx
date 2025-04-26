import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Photo {
  id: number;
  image: string;
}

const Details: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number>(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
  const [hoverPhoto, setHoverPhoto] = useState<number | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      image: "/images/nike-thumbnail.jpg",
    },
    {
      id: 2,
      image: "/images/nike-thumbnail-2.png",
    },
    {
      id: 3,
      image: "/images/nike-thumbnail.jpg",
    },
    {
      id: 4,
      image: "/images/nike-thumbnail.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
    });
    
    // Add Lato font
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap';
    document.head.appendChild(linkElement);
    
    // Apply font-family to body
    document.body.style.fontFamily = "'Lato', sans-serif";
    
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);

  const changeActive = (id: number): void => {
    setActivePhoto(id);
  };

  const toggleNavbar = (): void => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const toggleUserDropdown = (): void => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <div className="font-['Lato']">
      {/* Navigation */}
      <nav
        className="bg-white fixed w-full shadow-lg z-50"
        data-aos="fade-down"
        aria-label="Navbar"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex-shrink-0">
              <img src="/images/logo.svg" alt="Store Logo" />
            </Link>
            <div className="block lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700"
                onClick={toggleNavbar}
              >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className={`${isNavbarOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
              <div className="lg:flex-grow">
                <ul className="lg:flex lg:items-center lg:justify-end">
                  <li>
                    <Link to="/" className="block lg:inline-block mt-4 lg:mt-0 mr-6 text-gray-600 hover:text-[#053F8C] font-medium transition-colors duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories" className="block lg:inline-block mt-4 lg:mt-0 mr-6 text-gray-600 hover:text-[#053F8C] font-medium transition-colors duration-300">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="/rewards" className="block lg:inline-block mt-4 lg:mt-0 mr-6 text-gray-600 hover:text-[#053F8C] font-medium transition-colors duration-300">
                      Rewards
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center">
                <div className="relative">
                  <button 
                    className="flex items-center focus:outline-none" 
                    onClick={toggleUserDropdown}
                  >
                    <img src="/images/user.svg" alt="" className="rounded-full w-8 h-8 mr-2 border-2"/>
                    <span className="text-gray-700 font-medium">Hi, Tohari</span>
                  </button>
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl py-1 border border-gray-100">
                      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#053F8C] hover:text-white transition-colors duration-200">Dashboard</Link>
                      <Link to="/dashboard-account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#053F8C] hover:text-white transition-colors duration-200">Settings</Link>
                      <div className="border-t border-gray-100"></div>
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#053F8C] hover:text-white transition-colors duration-200">Logout</Link>
                    </div>
                  )}
                </div>
                <div className="ml-4">
                  <Link to="/cart" className="inline-block mt-2 relative group">
                    <img src="/images/cart.svg" alt="Cart" className="transition-transform duration-300 transform group-hover:scale-110" />
                    <span className="absolute -top-2 -right-2 bg-[#053F8C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </Link>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="lg:hidden mt-4">
                <div className="flex flex-col">
                  <Link to="#" className="block px-2 py-1 text-gray-600 hover:text-[#053F8C]">
                    Hi, Angga
                  </Link>
                  <Link to="/cart" className="block px-2 py-1 text-gray-600 hover:text-[#053F8C]">
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-100" data-aos="fade-down" data-aos-delay="100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg-flex-col ">
              <div className="w-full">
                <nav>
                  <ol className="flex list-none p-0">
                    <li className="flex items-center">
                      <Link to="/" className="text-gray-600 hover:text-[#053F8C] transition-colors duration-300">Home</Link>
                      <span className="mx-2 text-gray-500">/</span>
                    </li>
                    <li className="flex items-center text-[#053F8C] font-medium">
                      Product Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Gallery */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-2/3 px-4" data-aos="zoom-in">
                <img
                  src={photos[activePhoto].image}
                  className="w-full rounded"
                  alt="Product Image"
                />
              </div>
              <div className="w-full lg:w-1/6 px-4">
                <div className="flex flex-row lg:flex-col">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className="w-1/3 lg:w-full mt-2 lg:mt-0 px-1 lg:px-0 lg:mb-2"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <a 
                        href="#!" 
                        onClick={(e) => {
                          e.preventDefault();
                          changeActive(index);
                        }}
                      >
                        <img
                          src={photo.image}
                          className={`w-full rounded transition-all duration-200 ${index === activePhoto ? 'border-2 border-[#053F8C]' : ''}`}
                          alt="Product Thumbnail"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Information */}
        <div data-aos="fade-up">
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row lg:flex-wrap">
                <div className="w-full lg:w-2/3 px-6 mb-8 lg:mb-0">
                  <h1 className="text-4xl font-black mb-4 text-[#141718]">Nike Air Force 1</h1>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">(24 reviews)</span>
                  </div>
                  <p className="text-3xl font-bold text-[#053F8C] mb-4">Rp 1.500.000</p>
                  <p className="text-sm text-gray-500 line-through">Rp 1.800.000</p>
                </div>
                <div className="w-full lg:w-1/3 px-6" data-aos="zoom-in">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-3">
                        Varian Produk
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {['40', '41', '42', '43'].map((size) => (
                          <button 
                            key={size}
                            className="border border-gray-300 rounded py-2 hover:border-[#053F8C] hover:text-[#053F8C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#053F8C]"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 px-4 bg-[#053F8C] text-white font-medium rounded-lg hover:bg-[#042e66] transition-colors duration-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Masukkan Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Product Description */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full lg:w-2/3 px-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-[#053F8C]">Deskripsi Produk</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      The Nike Air Max 720 SE goes bigger than ever before with
                      Nike's tallest Air unit yet for unimaginable, all-day comfort.
                      There's super breathable fabrics on the upper, while colours
                      add a modern edge.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Bring the past into the future with the Nike Air Max 2090, a
                      bold look inspired by the DNA of the iconic Air Max 90.
                      Brand-new Nike Air cushioning underfoot adds unparalleled
                      comfort while transparent mesh and vibrantly coloured details
                      on the upper are blended with timeless OG features for an
                      edgy, modernised look.
                    </p>
                    
                    <div className="mt-6">
                      <h4 className="font-bold text-gray-800 mb-3">Product Features:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Premium leather upper</li>
                        <li>Cushioned collar for comfort</li>
                        <li>Perforations for breathability</li>
                        <li>Rubber sole for traction</li>
                        <li>Iconic Air-Sole unit visible through window</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Customer Reviews */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 mb-8">
                  <h3 className="text-2xl font-bold text-[#053F8C]">Ulasan Pembeli</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap -mx-6">
                <div className="w-full lg:w-2/3 px-6">
                  <div className="space-y-6">
                    {[
                      {
                        name: "Hazza Risky",
                        date: "2 hari lalu",
                        rating: 5,
                        review: "I thought it was not good for living room. I really happy to decided buy this product last week now feels like homey."
                      },
                      {
                        name: "Anna Sukkirata",
                        date: "1 wehari lalu",
                        rating: 4,
                        review: "Color is great with the minimalist concept. Even I thought it was made by Cactus industry. I do really satisfied with this."
                      },
                      {
                        name: "Dakimu Wangi",
                        date: "2 weehari lalu",
                        rating: 5,
                        review: "When I saw at first, it was really awesome to have with. Just let me know if there is another upcoming product like this."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <img
                              src="/images/guest.png"
                              className="w-12 h-12 rounded-full mr-4 border-2 border-[#053F8C]"
                              alt={`${item.name}'s avatar`}
                            />
                            <div>
                              <h5 className="text-lg font-bold mb-1">{item.name}</h5>
                              <p className="text-gray-500 text-sm">{item.date}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(item.rating)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            {[...Array(5 - item.rating)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{item.review}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full py-3 border border-[#053F8C] text-[#053F8C] font-medium rounded-lg hover:bg-[#053F8C] hover:text-white transition-colors duration-300">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-50 to-gray-100 pt-10 pb-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ecommerce</h3>
                <p className="text-gray-600 mb-4">Temukan kebutuhan kamu disini.</p>
                <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.508 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 00-.748-1.15 3.09 3.09 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.064a5.136 5.136 0 110 10.272 5.136 5.136 0 010-10.272zm0 8.466a3.33 3.33 0 100-6.66 3.33 3.33 0 000 6.66zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></svg>
                </a>
                </div>
            </div>
            
            {/* Quick links - simplified */}
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Tautan Cepat</h3>
                <div className="grid grid-col gap-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Tentang Kami</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Kontak Kami</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Bantuan</a>
                </div>
            </div>
            
            {/* Newsletter - simplified */}
            <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Berlangganan Info</h3>
                <p className="text-gray-600 mb-3">Dapatkan update & promo terbaru</p>
                <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-end">
                <input 
                    type="email" 
                    placeholder="Email Anda" 
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                    required
                />
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Daftar
                </button>
                </form>
            </div>
            </div>
            
            {/* Bottom footer - simplified */}
            <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="mb-3 md:mb-0">
                <p className="text-sm text-gray-600">© 2025 Ecommerce. Semua hak dilindungi.</p>
                </div>
            </div>
            </div>
        </div>
        </footer>
      </div>
    </div>
  );
};

export default Details;