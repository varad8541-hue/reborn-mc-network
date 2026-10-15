import React from 'react';
import { Copy, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SERVER_IP = 'play.rebornmc.net';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    alert('Server IP copied to clipboard');
  };
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-center py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">YOUR NEXT ADVENTURE STARTS HERE</h1>
          <p className="text-lg mb-6">Join the RebornMC network for epic battles, custom ranks, and a vibrant community.</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/store')}
              className="bg-primary text-white px-6 py-3 rounded hover:bg-purple-600 transition"
            >
              Visit Store
            </button>
            <button
              onClick={() => {
                // placeholder for launching Minecraft – could copy IP
                copyIP();
              }}
              className="bg-secondary text-white px-6 py-3 rounded hover:bg-blue-600 transition"
            >
              Play Now
            </button>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
            >
              Join Discord
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <span className="text-lg font-m">{SERVER_IP}</span>
            <button onClick={copyIP} className="text-gray-300 hover:text-primary">
              <Copy size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Server Status */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Server Status</h2>
        {/* Placeholder – real status fetched from backend */}
        <div className="bg-darknav rounded-lg p-6 text-center shadow-glow">
          <p className="text-xl">Online • 0/100 players</p>
        </div>
      </section>

      {/* Featured Ranks */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Featured Ranks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example rank cards – replace with dynamic data */}
          <div className="bg-darknav rounded-lg p-4 shadow-glow">
            <h3 className="text-xl font-semibold text-purple-400">VIP</h3>
            <p className="text-gray-300">Access to exclusive kits and chat prefix.</p>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-purple-600">Buy</button>
          </div>
          <div className="bg-darknav rounded-lg p-4 shadow-glow">
            <h3 className="text-xl font-semibold text-purple-400">MVP</h3>
            <p className="text-gray-300">All VIP perks + extra homes.</p>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-purple-600">Buy</button>
          </div>
          <div className="bg-darknav rounded-lg p-4 shadow-glow">
            <h3 className="text-xl font-semibold text-purple-400">LEGEND</h3>
            <p className="text-gray-300">Ultimate status, custom cape, and more.</p>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-purple-600">Buy</button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Community Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-darknav rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-secondary">0</p>
            <p className="text-gray-300">Total Players</p>
          </div>
          <div className="bg-darknav rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-secondary">0</p>
            <p className="text-gray-300">Active Today</p>
          </div>
          <div className="bg-darknav rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-secondary">0</p>
            <p className="text-gray-300">Ranks Sold</p>
          </div>
          <div className="bg-darknav rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-secondary">0</p>
            <p className="text-gray-300">Crates Opened</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">FAQ</h2>
        <div className="space-y-4">
          <details className="bg-darknav rounded p-4">
            <summary className="font-medium cursor-pointer">How do I join the server?</summary>
            <p className="mt-2 text-gray-300">Copy the IP above and paste it into your Minecraft multiplayer screen.</p>
          </details>
          <details className="bg-darknav rounded p-4">
            <summary className="font-medium cursor-pointer">What payment methods are accepted?</summary>
            <p className="mt-2 text-gray-300">We use Stripe – credit/debit cards and Apple/Google Pay.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Home;
