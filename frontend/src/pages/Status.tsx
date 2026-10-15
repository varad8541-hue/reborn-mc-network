import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ServerStatus {
  online: boolean;
  players: { online: number; max: number };
  ip: string;
  version: string;
}

const Status: React.FC = () => {
  const [status, setStatus] = useState<ServerStatus | null>(null);

  useEffect(() => {
    axios.get<ServerStatus>('/api/status')
      .then(res => setStatus(res.data))
      .catch(() => setStatus(null));
  }, []);

  if (!status) {
    return <div className="text-center py-8">Loading server status...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Server Status</h1>
      <div className="bg-darknav rounded-lg p-6 text-center shadow-glow">
        <p className="text-xl mb-2">
          {status.online ? '🟢 Online' : '🔴 Offline'}
        </p>
        <p className="text-lg">{status.players.online}/{status.players.max} players</p>
        <p className="text-lg">IP: {status.ip}</p>
        <p className="text-lg">Version: {status.version}</p>
      </div>
    </div>
  );
};

export default Status;
