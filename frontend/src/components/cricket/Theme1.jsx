import { useState } from 'react';

function Theme1() {
  const [score] = useState({
    batsman1: {
      name: 'I. PATHAN',
      runs: '0',
      balls: '0',
      sar: '74'
    },
    batsman2: {
      name: 'S. AFRIDI',
      runs: '0',
      balls: '0',
      sar: '73'
    },
    bowler: {
      name: 'G. NAIB',
      overs: '0-0',
      economy: '0.0',
      sar: '79'
    },
    match: {
      team1: 'MAS',
      team2: 'SRI',
      score: '0-0',
      overs: '0.0',
      ballsRemaining: '12',
      runRate: '0.00'
    }
  });

  return (
    <div className="h-screen w-screen bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center flex items-end">
      {/* Main Scoreboard Container */}
      <div className="w-full h-[72px] flex flex-col">
        {/* Top Yellow Bar */}
        <div className="h-[24px] bg-yellow-400 flex items-center justify-between px-4 text-black font-bold">
          <div className="flex items-center gap-4">
            <span>{score.match.ballsRemaining} BALLS REMAINING</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-1">RUN RATE {score.match.runRate}</div>
            <span className="text-xl">16</span>
          </div>
        </div>

        {/* Main Score Section */}
        <div className="h-[48px] bg-black/90 text-white flex items-center">
          {/* Left Batsman */}
          <div className="w-[240px] h-full bg-[#1a1a1a] flex items-center px-4 border-r border-gray-700">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">BAT SAR {score.batsman1.sar}</span>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">▶</span>
                <span className="font-bold">{score.batsman1.name}</span>
                <span className="font-bold">{score.batsman1.runs}</span>
                <span className="text-sm text-gray-400">({score.batsman1.balls})</span>
              </div>
            </div>
          </div>

          {/* Second Batsman */}
          <div className="w-[240px] h-full bg-[#1a1a1a] flex items-center px-4 border-r border-gray-700">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">BAT SAR {score.batsman2.sar}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold">{score.batsman2.name}</span>
                <span className="font-bold">{score.batsman2.runs}</span>
                <span className="text-sm text-gray-400">({score.batsman2.balls})</span>
              </div>
            </div>
          </div>

          {/* Center Score */}
          <div className="flex-1 flex items-center justify-center gap-4">
            <div className="w-8 h-8">
              <img src="https://flagcdn.com/w80/my.png" alt="Malaysia" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#E91E63] px-6 py-1 font-bold text-xl">
              {score.match.score}
            </div>
            <div className="text-xl font-bold">{score.match.overs}</div>
            <div className="w-8 h-8">
              <img src="https://flagcdn.com/w80/lk.png" alt="Sri Lanka" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bowler Section */}
          <div className="w-[240px] h-full bg-[#1a1a1a] flex items-center px-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">BOWL SAR {score.bowler.sar}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold">{score.bowler.name}</span>
                <span className="font-bold">{score.bowler.overs}</span>
                <span className="text-sm text-gray-400">{score.bowler.economy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme1;