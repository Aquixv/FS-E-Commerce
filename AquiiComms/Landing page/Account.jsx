import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../src/AuthContext';
import ProfilePicUpload from './profilepic';

const Account = () => {
    const { logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo || !userInfo.token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:1500/api/users/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProfile(data);
        } else {
          localStorage.removeItem('userInfo');
          navigate('/login');
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProfile();
  }, [navigate]);


const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!profile) return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Loading your profile...</div>;

return (
  <div className="account-container" style={{ minHeight: '80vh', padding: '60px 5%', backgroundColor: '#f8f9fa' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      
      <div className="account-sidebar" style={{ flex: '1', minWidth: '250px', background: '#fff', borderRadius: '15px', padding: '20px', height: 'fit-content', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        <div style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
          <div style={{ width: '80px', height: '80px', background: '#000', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 10px' }}>
            {profile.name.charAt(0)}
            <ProfilePicUpload></ProfilePicUpload>
          </div>
          <h3 style={{ margin: '0', marginTop:'60px' }}>{profile.name}</h3>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: '5px 0 0' }}>{profile.email}</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={() => setActiveTab('profile')} style={{ padding: '12px 15px', textAlign: 'left', background: activeTab === 'profile' ? '#f0f0f0' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: '0.2s' }}>👤 My Profile</button>
          <button onClick={() => setActiveTab('orders')} style={{ padding: '12px 15px', textAlign: 'left', background: activeTab === 'orders' ? '#f0f0f0' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: '0.2s' }}>📦 Order History</button>
          <button onClick={() => setActiveTab('settings')} style={{ padding: '12px 15px', textAlign: 'left', background: activeTab === 'settings' ? '#f0f0f0' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: '0.2s' }}>⚙️ Settings</button>
          <button onClick={handleLogout} style={{ padding: '12px 15px', textAlign: 'left', background: '#fff0f0', color: '#d32f2f', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', marginTop: '20px' }}>🚪 Log Out</button>
        </nav>
      </div>
      <div className="account-content" style={{ flex: '3', minWidth: '300px', background: '#fff', borderRadius: '15px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        
        {activeTab === 'profile' && (
          <div>
            <h2 style={{ marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Profile Details</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>Full Name</label>
                <p style={{ fontSize: '1.1rem', fontWeight: '500', margin: '5px 0' }}>{profile.name}</p>
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>Email Address</label>
                <p style={{ fontSize: '1.1rem', fontWeight: '500', margin: '5px 0', overflowWrap: 'break-word', wordBreak:'break-all'}}>{profile.email}</p>
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}></label>
                <p style={{ fontSize: '0.9rem', background: '#000', color: '#fff', display: 'inline-block', padding: '4px 10px', borderRadius: '12px', margin: '5px 0' }}>{profile.role.toUpperCase()}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <span style={{ fontSize: '4rem' }}>🛍️</span>
            <h3 style={{ margin: '20px 0 10px' }}>No orders yet</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>When you buy something, it will appear here.</p>
            <button style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>Start Shopping</button>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 style={{ marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>Account Settings</h2>
            <p style={{ color: '#666' }}>Password changing and address management coming soon.</p>
          </div>
        )}

      </div>
    </div>
  </div>
);
};

export default Account;