import React, { useState } from 'react';
// import * as tf from '@tensorflow/tfjs';  // Comment out to avoid dep issues

export const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: 'Reactor stable. Query synergies? (e.g., "DevOps + AI")', sender: 'AI' }]);
  const [input, setInput] = useState('');

  // Mock "model" – simple keyword-based suggestions (replace with real TF.js later)
  const mockModelPredict = (query) => {
    const synergies = {
      'devops': 'Pair DevOps with IaC for scalable quantum-safe infra.',
      'ai': 'Entangle AI models with Kubernetes for predictive orchestration.',
      'green': 'Optimize emissions via green DevOps audits—reduced 15% in sims.',
      default: 'Explore entanglements: DevOps for stability, AI for prediction.'
    };
    const key = query.toLowerCase().includes('devops') ? 'devops' : 
                query.toLowerCase().includes('ai') ? 'ai' : 
                query.toLowerCase().includes('green') ? 'green' : 'default';
    return synergies[key];
  };

  const suggestSynergy = (userQuery = '') => {
    const suggestion = mockModelPredict(userQuery);
    setMessages((prev) => [...prev, { text: suggestion, sender: 'AI' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: 'User' }]);
      setTimeout(() => suggestSynergy(input), 500);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <h3>AI Overseer</h3>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, i) => (
          <p key={i} style={{ 
            color: msg.sender === 'AI' ? '#00ff88' : '#ff0088', 
            margin: '5px 0',
            fontSize: '14px'
          }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Stabilize query... (e.g., 'How to scale AI?')"
          style={{ width: '100%', padding: '8px', border: '1px solid #00ff88', borderRadius: '4px', background: 'rgba(0,0,0,0.5)', color: '#00ff88' }}
        />
      </form>
    </div>
  );
};