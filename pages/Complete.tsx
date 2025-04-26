// OrderComplete.tsx — Final Step Page (Responsive)
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <div className="text-xs text-center bg-[#EDF1F4] py-2 font-medium">30% off storewide — Limited time!</div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b md:px-12">
        <div className="text-lg font-semibold">3legant.</div>
        <div className="flex gap-4 text-lg">
          <button><i className="fas fa-search"></i></button>
          <button><i className="fas fa-user"></i></button>
          <div className="relative">
            <button><i className="fas fa-shopping-bag"></i></button>
            <span className="absolute -top-2 -right-2 text-xs w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">2</span>
          </div>
        </div>
      </header>

      {/* Step Bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <h1 className="text-center text-3xl font-bold mb-4">Complete!</h1>
        <div className="flex justify-between border-b pb-6 text-center text-xs font-medium">
          {["Shopping cart", "Checkout details", "Order complete"].map((label, idx) => (
            <div key={idx} className="flex-1 relative">
              <div className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center
                ${idx < 2 ? 'bg-[#38CB89]' : 'bg-black'} text-white`}>
                {idx < 2 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>3</span>
                )}
              </div>
              <p className={`
                ${idx === 2 ? 'text-black font-semibold' : 'text-[#38CB89] font-medium'}`}>{label}</p>
              {idx === 2 && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-4/5 bg-black rounded-sm" />}
            </div>
          ))}
        </div>
      </div>

      {/* Order Info */}
      <section className="max-w-xl mx-auto px-6 mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
        <p className="text-sm text-gray-500 mb-6">Your order has been received</p>

        <div className="text-sm space-y-4 text-left">
          <div className="flex justify-between">
            <span className="text-gray-500">Order code:</span>
            <span className="font-semibold">#0123_45678</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Date:</span>
            <span className="font-semibold">October 19, 2023</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Total:</span>
            <span className="font-semibold">$1,345.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Payment method:</span>
            <span className="font-semibold">Credit Card</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-8 w-full bg-black text-white text-sm py-2.5 rounded"
        >
          Back to Home
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-black text-white text-sm px-6 pt-10 pb-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">3legant.</h2>
            <p className="text-gray-400 text-xs">Gift & Decoration Store</p>
          </div>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">Product</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <div className="flex justify-center md:justify-end gap-4 text-lg">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-xs text-gray-400 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
            <p>&copy; 2023 HomeDecor. All rights reserved</p>
            <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderComplete;