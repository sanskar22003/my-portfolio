import React, { useState, useEffect } from 'react';

export const Alerts = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 10));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gauge">
      <div
        className={`gauge-fill ${progress > 0 ? 'animate' : ''}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};