import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import collegeLogo from '../assets/college-logo.png'; // make sure this exists

const Layout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Topbar */}
      <div style={{
        height: '60px',
        backgroundColor: '#007bff',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={collegeLogo} alt="Logo" style={{ width: '40px', borderRadius: '6px' }} />
          <h3>Smart Campus Bus Tracker</h3>
        </div>
        <div>
          <span style={{ marginRight: '15px' }}>Welcome, {user?.name}</span>
          <button
            onClick={logout}
            style={{
              background: 'white',
              color: '#007bff',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <div style={{
          width: '200px',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #ddd',
          padding: '20px',
          boxShadow: '2px 0 6px rgba(0,0,0,0.05)'
        }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: location.pathname === '/' ? '#007bff' : '#333' }}>
                  Dashboard
                </Link>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <Link to="/routes" style={{ textDecoration: 'none', color: location.pathname === '/routes' ? '#007bff' : '#333' }}>
                  Route Management
                </Link>
              </li>
              {/* Fee Management removed */}
            </ul>
          </nav>
        </div>

        {/* Page Content */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f7fa' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
