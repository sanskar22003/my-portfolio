import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';  // Comment: No server, use local only

export const Alerts = () => {
  const [traffic, setTraffic] = useState(20);  // Start at 20% for immediate anim

  useEffect(() => {
    // Local sim: Faster interval, random fluctuations
    const interval = setInterval(() => {
      setTraffic((prev) => {
        const change = (Math.random() - 0.5) * 20;  // ±10% variance
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 1000);  // 1s updates

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gauge">
      <div className="gauge-fill" style={{ width: `${traffic}%` }} />
      <span style={{ 
        position: 'absolute', 
        right: '10px', 
        bottom: '-25px', 
        fontSize: '12px', 
        color: '#00ff88',
        textShadow: '0 0 5px #00ff88'  // Glow text
      }}>
        Reactor Load: {Math.round(traffic)}%
      </span>
    </div>
  );
};