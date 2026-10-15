import React from 'react';
import { Discord } from 'lucide-react';

const DiscordPage: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 py-8 text-center">
    <h1 className="text-4xl font-bold text-primary mb-6">Join our Discord</h1>
    <p className="text-lg mb-4">Stay up‑to‑date with announcements, events, and community chat.</p>
    <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded hover:bg-purple-600">
      <Discord size={20} className="mr-2" />
      Discord Invite
    </a>
  </div>
);

export default DiscordPage;
