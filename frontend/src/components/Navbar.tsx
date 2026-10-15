import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="bg-darknav text-white shadow-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              RebornMC
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/store" className="hover:text-primary">Store</Link>
            <Link to="/ranks" className="hover:text-primary">Ranks</Link>
            <Link to="/crates" className="hover:text-primary">Crates</Link>
            <Link to="/status" className="hover:text-primary">Status</Link>
            <Link to="/leaderboard" className="hover:text-primary">Leaderboard</Link>
            <Link to="/discord" className="hover:text-primary">Discord</Link>
            <Link to="/rules" className="hover:text-primary">Rules</Link>
            <Link to="/admin" className="hover:text-primary">Admin</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-300 hover:text-primary">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-darknav">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/store" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Store</Link>
            <Link to="/ranks" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Ranks</Link>
            <Link to="/crates" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Crates</Link>
            <Link to="/status" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Status</Link>
            <Link to="/leaderboard" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Leaderboard</Link>
            <Link to="/discord" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Discord</Link>
            <Link to="/rules" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Rules</Link>
            <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
