import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Category {
    id: number;
    name: string;
    image: string;
    itemCount: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
}

const Home: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    // Sample data for categories
    const categoriesData: Category[] = [
        {
        id: 1,
        name: "leptop",
        image: "/images/thumbnail_leptop.png",
        itemCount: 120
        },
        {
        id: 2,
        name: "Casual",
        image: "/images/thumbnail_leptop.png",
        itemCount: 85
        },
        {
        id: 3,
        name: "Sports",
        image: "/images/thumbnail_leptop.png",
        itemCount: 68
        },
        {
        id: 4,
        name: "Formal",
        image: "/images/thumbnail_leptop.png",
        itemCount: 42
        }
    ];

    // Sample data for products
    const productsData: Product[] = [
        {
        id: 1,
        name: "Nike Air Force 1",
        price: 1500000,
        originalPrice: 1800000,
        image: "/images/",
        rating: 5,
        reviewCount: 24
        },
        {
        id: 2,
        name: "Adidas Ultraboost",
        price: 2200000,
        originalPrice: 2500000,
        image: "/images/nike-thumbnail-2.png",
        rating: 4,
        reviewCount: 18
        },
        {
        id: 3,
        name: "Puma Suede Classic",
        price: 1200000,
        image: "/images/nike-thumbnail.jpg",
        rating: 4,
        reviewCount: 15
        },
        {
        id: 4,
        name: "New Balance 574",
        price: 1350000,
        image: "/images/nike-thumbnail.jpg",
        rating: 5,
        reviewCount: 12
        },
        {
        id: 5,
        name: "Vans Old Skool",
        price: 950000,
        originalPrice: 1100000,
        image: "/images/nike-thumbnail.jpg",
        rating: 4,
        reviewCount: 32
        },
        {
        id: 6,
        name: "Converse Chuck Taylor",
        price: 850000,
        image: "/images/nike-thumbnail.jpg",
        rating: 5,
        reviewCount: 29
        },
        {
        id: 7,
        name: "Reebok Classic",
        price: 1150000,
        image: "/images/nike-thumbnail.jpg",
        rating: 4,
        reviewCount: 8
        },
        {
        id: 8,
        name: "Asics Gel-Lyte",
        price: 1650000,
        originalPrice: 1850000,
        image: "/images/nike-thumbnail.jpg",
        rating: 5,
        reviewCount: 14
        }
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
        
        // Initialize data
        setCategories(categoriesData);
        setFeaturedProducts(productsData);
        
        return () => {
        document.head.removeChild(linkElement);
        };
    }, []);

    const toggleNavbar = (): void => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const toggleUserDropdown = (): void => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
        }).format(price);
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
                        <Link to="/" className="block lg:inline-block mt-4 lg:mt-0 mr-6 text-[#053F8C] font-medium transition-colors duration-300">
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
                        <img src="/images/user.svg" alt="" className="rounded-full w-8 h-8 mr-2 border-2" />
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

        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right">
                <h1 className="text-4xl lg:text-5xl font-black text-[#141718] mb-6">
                Semua yang Kamu <span className="text-[#053F8C]">Butuhkan, </span> Dalam Satu Tempat 
                </h1>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Hadir dengan produk berkualitas dan pilihan kategori yang akan terus bertambah.<br/> Temukan kemudahan belanja online di sini.
                </p>
                <div className="flex flex-wrap">
                    <Link 
                    to="/categories" 
                    className="py-3 px-8 bg-[#053F8C] text-white font-medium rounded-lg hover:bg-[#042e66] transition-colors duration-200 mr-4 mb-4 lg:mb-0"
                    >
                    Beli Sekarang
                    </Link>
                    <Link 
                    to="/featured" 
                    className="py-3 px-8 border border-[#053F8C] text-[#053F8C] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                    Eksplore Koleksi
                    </Link>
                </div>
                </div>
                <div className="w-full lg:w-1/2" data-aos="fade-left">
                <div className="relative">
                    <img 
                    src="/images/thumbnail_leptop.png" 
                    alt="Hero Product" 
                    className="w-full rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
                    <div className="flex items-center">
                        <div className="mr-5">
                        <p className="text-gray-500 text-sm">Limited Edition</p>
                        <h3 className="font-bold text-lg">Laptop ASUS ROG Strix GL553</h3>
                        </div>
                        <p className="text-[#053F8C] font-bold text-xl">Rp 20.500.000</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-[#141718] mb-4">Jelajahi Berdasarkan Kategori</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                Temukan produk terbaik dari berbagai kategori. 
                </p>
            </div>
            
            <div className="flex flex-wrap -mx-4">
                {categories.map((category) => (
                <div 
                    key={category.id} 
                    className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
                    data-aos="fade-up"
                    data-aos-delay={`${category.id * 100}`}
                >
                    <Link to='#' className="block group">
                    <div className="relative rounded-lg overflow-hidden mb-4">
                        <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-[#141718]">{category.name}</span>
                        <span className="text-sm text-gray-500">{category.itemCount} Koleksi</span>
                    </div>
                    </Link>
                </div>
                ))}
            </div>
            
            <div className="text-center mt-6" data-aos="fade-up">
                <Link 
                to="/categories" 
                className="py-3 px-8 border border-[#053F8C] text-[#053F8C] font-medium rounded-lg hover:bg-[#053F8C] hover:text-white transition-colors duration-300 inline-block"
                >
                Semua Kategori
                </Link>
            </div>
            </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
                <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-[#141718]">Produk Kami</h2>
                <p className="text-gray-600">Temukan Koleksi produk terbaru kami</p>
                </div>
                <div className="hidden md:block" data-aos="fade-left">
                <Link 
                    to="/details" 
                    className="text-[#053F8C] font-medium hover:underline flex items-center"
                >
                    Lihat Semua
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Link>
                </div>
            </div>
            
            <div className="flex flex-wrap -mx-4">
                {featuredProducts.map((product) => (
                <div 
                    key={product.id} 
                    className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
                    data-aos="fade-up"
                    data-aos-delay={`${(product.id % 4) * 100}`}
                >
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                    <Link to="/details" className="block relative">
                        <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full aspect-[4/3] object-cover overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.originalPrice && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            Sale
                        </span>
                        )}
                    </Link>
                    <div className="p-4">
                        <Link to={`/products/${product.id}`} className="block">
                        <h3 className="font-bold text-lg text-[#141718] mb-2 group-hover:text-[#053F8C] transition-colors duration-300">
                            {product.name}
                        </h3>
                        </Link>
                        <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                            <svg 
                                key={i} 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-gray-500 text-sm">({product.reviewCount})</span>
                        </div>
                        <div className="flex items-end justify-between">
                        <div>
                            <p className="text-lg font-bold text-[#053F8C]">
                            {formatPrice(product.price)}
                            </p>
                            {product.originalPrice && (
                            <p className="text-xs text-gray-500 line-through">
                                {formatPrice(product.originalPrice)}
                            </p>
                            )}
                        </div>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-[#053F8C] hover:text-white transition-colors duration-300">
                            <img src="/images/cart-white.svg" alt="cart" />
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="text-center mt-6 md:hidden" data-aos="fade-up">
                <Link 
                to="/products" 
                className="py-3 px-8 border border-[#053F8C] text-[#053F8C] font-medium rounded-lg hover:bg-[#053F8C] hover:text-white transition-colors duration-300 inline-block"
                >
                View All Products
                </Link>
            </div>
            </div>
        </section>

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
    );
}
export default Home;