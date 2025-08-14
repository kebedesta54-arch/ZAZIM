import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Zazim Movers Hub</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border rounded p-2" />
          <input type="email" placeholder="Email" className="w-full border rounded p-2" />
          <input type="tel" placeholder="Phone Number" className="w-full border rounded p-2" />
          <textarea placeholder="Describe your moving needs" className="w-full border rounded p-2"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
}
