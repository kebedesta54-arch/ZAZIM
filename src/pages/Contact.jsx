import React from 'react';

export default function Contact() {
  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: '0 16px' }}>
      <h1>Contact</h1>
      <p>We'd love to hear from you!</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 400 }}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your message"></textarea>
        <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '8px 16px', border: 'none' }}>
          Send
        </button>
      </form>
    </main>
  );
}
