// Cart.tsx — Responsive Version (Mobile + Desktop)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type CartItem = {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
  { id: 1, name: 'Tray Table', color: 'Black', price: 19.19, quantity: 2, image: '/images/product1.png' },
  { id: 2, name: 'Tray Table', color: 'Red', price: 19.19, quantity: 2, image: '/images/product2.png' },
  { id: 3, name: 'Table lamp', color: 'Gold', price: 39.0, quantity: 2, image: '/images/product3.png' },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [shippingType, setShippingType] = useState<'free' | 'express' | 'pickup'>('free');

  const handleQtyChange = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let shippingCost = 0;
  if (shippingType === 'express') shippingCost = 15;
  if (shippingType === 'pickup') shippingCost = subtotal * 0.21;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Header */}
      <div className="text-xs text-center bg-[#EDF1F4] py-2 font-medium">30% off storewide — Limited time!</div>
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

        <h1 className="text-center text-3xl font-bold mt-6 mb-4">Cart</h1>

         {/* Step Bar */}
         <div className="flex justify-between border-b pb-6 text-center text-xs font-medium">
          {["Shopping cart", "Checkout details", "Order complete"].map((label, idx) => (
            <div key={idx} className="flex-1 relative">
              <div
                className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center
                  ${idx === 0 ? 'bg-black' : 'bg-gray-300'} text-white`}
              >
                {idx === 0 ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              <p className={
                `${idx === 0 ? 'text-[black] font-medium' : 'text-gray-500 text-xs font-medium'}`
              }>{label}</p>
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-4/5 rounded-sm
                ${idx === 0 ? 'bg-[black]' : ''}`}></div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-sm font-semibold mb-2 md:sr-only">Product</h2>
            {/* Mobile */}
            <div className="space-y-4 md:hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border" />
                  <div className="flex-1 text-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold leading-5">{item.name}</p>
                        <p className="text-gray-500 text-xs">Color: {item.color}</p>
                      </div>
                      <p className="font-semibold text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex border rounded overflow-hidden w-fit">
                        <button onClick={() => handleQtyChange(item.id, -1)} className="px-3">−</button>
                        <span className="px-3">{item.quantity}</span>
                        <button onClick={() => handleQtyChange(item.id, 1)} className="px-3">+</button>
                      </div>
                      <button className="text-red-500 text-xs">×</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 font-semibold">Product</th>
                    <th className="py-2 text-center font-semibold">Quantity</th>
                    <th className="py-2 text-center font-semibold">Price</th>
                    <th className="py-2 text-right font-semibold">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4 flex gap-4 items-center">
                        <img src={item.image} className="w-16 h-16 object-cover rounded border" />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-xs text-gray-500">Color: {item.color}</p>
                          <button className="text-xs text-red-500">× Remove</button>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="inline-flex border rounded overflow-hidden">
                          <button onClick={() => handleQtyChange(item.id, -1)} className="px-3">−</button>
                          <span className="px-3">{item.quantity}</span>
                          <button onClick={() => handleQtyChange(item.id, 1)} className="px-3">+</button>
                        </div>
                      </td>
                      <td className="text-center">${item.price.toFixed(2)}</td>
                      <td className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coupon */}
            <div>
              <h3 className="font-semibold text-sm">Have a coupon?</h3>
              <p className="text-xs text-gray-500 mb-3">Add your code for an instant cart discount</p>
              <div className="flex border rounded overflow-hidden text-sm max-w-md">
                <div className="flex items-center px-4 text-gray-500">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <input type="text" className="flex-1 px-4 py-2" placeholder="Coupon Code" />
                <button className="px-4 border-l">Apply</button>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="border rounded-lg p-6 space-y-4 text-sm">
            <h3 className="font-semibold text-base">Cart summary</h3>
            <div className="space-y-2">
              {['free', 'express', 'pickup'].map((type) => (
                <label
                  key={type}
                  className={`flex justify-between items-center border rounded px-4 py-2 ${shippingType === type ? 'bg-gray-100' : ''}`}
                >
                  <input type="radio" name="shipping" checked={shippingType === type} onChange={() => setShippingType(type as any)} />
                  <span className="ml-2 flex-1 capitalize">{type === 'pickup' ? 'Pick Up' : `${type} shipping`}</span>
                  <span>{type === 'free' ? '$0.00' : type === 'express' ? '+$15.00' : '%21.00'}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between pt-2 border-t text-xs">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-sm">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/Checkout">
  <button className="w-full bg-black text-white text-sm py-2.5 rounded">
    Checkout
  </button>
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
              <p>&copy; 2023 3legant. All rights reserved</p>
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

export default Cart;