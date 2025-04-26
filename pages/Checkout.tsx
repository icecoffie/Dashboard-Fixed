// Checkout.tsx — From Figma Layout (Responsive)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Checkout = () => {
  const [billingDifferent, setBillingDifferent] = useState(false);

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

      <main className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="md:hidden mt-4">
          <button className="text-sm text-gray-500">&lt; back</button>
        </div>

        <h1 className="text-center text-3xl font-bold mt-6 mb-4">Check Out</h1>
 {/* Step Bar */}
 <div className="flex justify-between border-b pb-6 text-center text-xs font-medium">
          {["Shopping cart", "Checkout details", "Order complete"].map((label, idx) => (
            <div key={idx} className="flex-1 relative">
              <div
                className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center
                  ${idx === 0 ? 'bg-[#38CB89]' : ''}
                  ${idx === 1 ? 'bg-black' : ''}
                  ${idx === 2 ? 'bg-gray-300' : ''}`}
              >
                {idx === 0 ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <span className="text-white">{idx + 1}</span>
                )}
              </div>
              <p className={`
                ${idx === 0 ? 'text-[#38CB89] font-medium' : ''}
                ${idx === 1 ? 'text-black font-semibold' : ''}
                ${idx === 2 ? 'text-gray-400 font-medium' : ''}`}>{label}</p>
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-4/5 rounded-sm
                ${idx === 0 ? 'bg-[#38CB89]' : ''}
                ${idx === 1 ? 'bg-black' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Main Form + Summary */}
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {/* Left: Form */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-sm font-semibold mb-2">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="border p-2 text-sm rounded" />
                <input type="text" placeholder="Last name" className="border p-2 text-sm rounded" />
              </div>
              <input type="tel" placeholder="Phone number" className="mt-4 w-full border p-2 text-sm rounded" />
              <input type="email" placeholder="Your Email" className="mt-2 w-full border p-2 text-sm rounded" />
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-2">Shipping Address</h2>
              <input type="text" placeholder="Street Address" className="w-full border p-2 text-sm rounded mb-2" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Country" className="border p-2 text-sm rounded" />
                <input type="text" placeholder="Town / City" className="border p-2 text-sm rounded" />
                <input type="text" placeholder="State" className="border p-2 text-sm rounded" />
                <input type="text" placeholder="Zip Code" className="border p-2 text-sm rounded" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input type="checkbox" checked={billingDifferent} onChange={() => setBillingDifferent(!billingDifferent)} />
                <label className="text-xs text-gray-600">Use a different billing address (optional)</label>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-2">Payment Method</h2>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  <span className="text-sm">Card Credit</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  <span className="text-sm">Paypal</span>
                </label>
              </div>
              <input type="text" placeholder="Card Number" className="w-full border p-2 text-sm rounded mb-2" />
              <div className="flex gap-4">
                <input type="text" placeholder="MM/YY" className="w-1/2 border p-2 text-sm rounded" />
                <input type="text" placeholder="CVC" className="w-1/2 border p-2 text-sm rounded" />
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="border rounded-lg p-6 text-sm space-y-4">
            <h3 className="font-semibold text-base">Order summary</h3>

            {/* Products */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Tray Table</p>
                  <p className="text-xs text-gray-500">Color: Black</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">2</p>
                  <p className="text-sm font-semibold">$38.00</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Tray Table</p>
                  <p className="text-xs text-gray-500">Color: Red</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">2</p>
                  <p className="text-sm font-semibold">$38.00</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Table Lamp</p>
                  <p className="text-xs text-gray-500">Color: Gold</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">2</p>
                  <p className="text-sm font-semibold">$39.00</p>
                </div>
              </div>
            </div>

            {/* Coupon Row */}
            <div className="flex items-center border rounded overflow-hidden">
              <input type="text" placeholder="Coupon Code" className="flex-1 px-4 py-2 text-sm focus:outline-none" />
              <button className="bg-black text-white px-4 text-sm">Apply</button>
            </div>
            <div className="text-xs text-gray-600 flex justify-between items-center">
              <span>JenkateMW -$25.00</span>
              <button className="text-red-500 text-xs">Remove</button>
            </div>

            {/* Summary */}
            <div className="flex justify-between text-xs pt-2 border-t">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Subtotal</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between font-semibold text-sm">
              <span>Total</span>
              <span>$234.00</span>
            </div>
            <Link to="/Complete">
            <button className="w-full bg-black text-white py-2.5 rounded text-sm">Place Order</button>
</Link>
          </div>
        </div>

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
      </main>
    </div>
  );
};

export default Checkout;