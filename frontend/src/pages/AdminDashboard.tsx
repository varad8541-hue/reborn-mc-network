import React from 'react';
import { Navigate } from 'react-router-dom';

// Simple placeholder – real admin UI would require auth and data fetching
const AdminDashboard: React.FC = () => {
  // In a real app, check admin auth token here and redirect if not logged in
  const isAdmin = true; // placeholder
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Admin Dashboard</h1>
      <p className="text-lg text-gray-300">This is a placeholder. Implement product, order, and settings management here.</p>
    </div>
  );
};

export default AdminDashboard;
