// src/App.jsxfeat: add pages (Home/Diagnostics/Movers/Contact) and top navbar links

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';

function Home() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    note: '',
  });
  const [sending, setSending] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSending(true);

    // שמירה מקומית של הליד (דמו) — localStorage
    const key = 'zazim_submissions';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));

    setTimeout(() => {
      setSending(false);
      navigate('/thanks');
    }, 400);
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 56px)', background: '#eef5ff' }}>
      <div style={{
        maxWidth: 520,
        margin: '0 auto',
        padding: '48px 16px'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
          padding: 24
        }}>
          <h1 style={{
            textAlign: 'center',
            color: '#1d4ed8',
            fontSize: 28,
            margin: '0 0 24px'
          }}>
            Zazim Movers Hub
          </h1>

          <form onSubmit={onSubmit}>
            <input
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              placeholder="Full Name"
              style={inputStyle}
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              style={inputStyle}
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone Number"
              style={inputStyle}
            />
            <textarea
              name="note"
              value={form.note}
              onChange={onChange}
              placeholder="Describe your moving needs"
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
            <button
              type="submit"
              disabled={sending}
              style={{
                width: '100%',
                height: 44,
                borderRadius: 8,
                border: 'none',
                background: sending ? '#93c5fd' : '#2563eb',
                color: 'white',
                fontSize: 16,
                cursor: sending ? 'not-allowed' : 'pointer'
              }}
            >
              {sending ? 'Sending…' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: 44,
  borderRadius: 8,
  border: '1px solid #e5e7eb',
  padding: '0 12px',
  marginBottom: 12,
  fontSize: 14
};

function Diagnostics() {
  const key = 'zazim_submissions';
  const submissions = JSON.parse(localStorage.getItem(key) || '[]').reverse();

  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px' }}>
      <h2 style={{ marginBottom: 12 }}>Diagnostics — Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {submissions.map((s, i) => (
            <div key={i} style={{
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: 12,
              background: '#fff'
            }}>
              <div><b>Name:</b> {s.fullName}</div>
              <div><b>Email:</b> {s.email}</div>
              <div><b>Phone:</b> {s.phone || '-'}</div>
              <div><b>Note:</b> {s.note || '-'}</div>
              <div style={{ color: '#64748b', fontSize: 12 }}>
                {new Date(s.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Movers() {
  const data = [
    { id: 1, name: 'FastBox Movers', city: 'Tel Aviv', rating: 4.7 },
    { id: 2, name: 'TopMove', city: 'Jerusalem', rating: 4.5 },
    { id: 3, name: 'Easy Lift', city: 'Haifa', rating: 4.3 },
  ];
  return (
    <div style={{ maxWidth: 960, margin: '24px auto', padding: '0 16px' }}>
      <h2 style={{ marginBottom: 12 }}>Movers (demo)</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {data.map(m => (
          <div key={m.id} style={{
            border: '1px solid #e5e7eb',
            borderRadius: 10,
            padding: 12,
            background: '#fff'
          }}>
            <div style={{ fontWeight: 600 }}>{m.name}</div>
            <div style={{ color: '#475569' }}>{m.city}</div>
            <div style={{ color: '#f59e0b' }}>★ {m.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ maxWidth: 720, margin: '24px auto', padding: '0 16px' }}>
      <h2>Contact (demo)</h2>
      <p>For business inquiries please email: hello@zazim.example</p>
    </div>
  );
}

function Thanks() {
  return (
    <div style={{ maxWidth: 720, margin: '24px auto', padding: '0 16px' }}>
      <h2>Thanks!</h2>
      <p>We received your details. We will get back to you soon.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/movers" element={<Movers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
