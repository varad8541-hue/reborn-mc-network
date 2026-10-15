import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface PlayerStat {
  uuid: string;
  name: string;
  playtime: number; // minutes
  coins: number;
  rank: string;
}

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<PlayerStat[]>([]);

  useEffect(() => {
    // Placeholder – replace with real backend endpoint
    axios.get<PlayerStat[]>('/api/leaderboard')
      .then(res => setPlayers(res.data))
      .catch(() => {
        // Sample data
        setPlayers([
          { uuid: '1', name: 'Alice', playtime: 1200, coins: 5000, rank: 'VIP' },
          { uuid: '2', name: 'Bob', playtime: 950, coins: 3000, rank: 'MVP' },
          { uuid: '3', name: 'Charlie', playtime: 800, coins: 2500, rank: 'LEGEND' },
        ]);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Leaderboard</h1>
      <table className="w-full table-auto bg-darknav rounded-lg overflow-hidden shadow-glow">
        <thead>
          <tr className="text-left">
            <th className="p-2">#</th>
            <th className="p-2">Player</th>
            <th className="p-2">Playtime (h)</th>
            <th className="p-2">Coins</th>
            <th className="p-2">Rank</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={p.uuid} className="border-t border-gray-700">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{(p.playtime / 60).toFixed(1)}</td>
              <td className="p-2">{p.coins}</td>
              <td className="p-2">{p.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
