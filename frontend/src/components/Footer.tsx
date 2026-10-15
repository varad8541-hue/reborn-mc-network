import React from 'react';
import { Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darknav text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2026 RebornMC Network. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Discord size={20} />
          </a>
          <a href="/rules" className="hover:text-primary">Rules</a>
          <a href="/privacy" className="hover:text-primary">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
