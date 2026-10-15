import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Store from '@/pages/Store';
import Ranks from '@/pages/Ranks';
import Crates from '@/pages/Crates';
import Status from '@/pages/Status';
import Leaderboard from '@/pages/Leaderboard';
import Discord from '@/pages/Discord';
import Rules from '@/pages/Rules';
import AdminDashboard from '@/pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-darkbg text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/crates" element={<Crates />} />
          <Route path="/status" element={<Status />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
