import React from 'react';

const Rules: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-primary mb-6 text-center">Server Rules</h1>
    <ol className="list-decimal list-inside space-y-2">
      <li>No griefing or stealing from other players.</li>
      <li>Respect staff and fellow community members.</li>
      <li>No cheating, hacks, or exploit usage.</li>
      <li>Keep chat appropriate – no hate speech, harassment, or NSFW content.</li>
      <li>Follow the Minecraft EULA and any additional network policies.</li>
    </ol>
    <p className="mt-6 text-sm text-gray-400">
      By playing on this server you agree to abide by these rules. Violations may result in warnings, temporary bans, or permanent bans at staff discretion.
    </p>
  </div>
);

export default Rules;
