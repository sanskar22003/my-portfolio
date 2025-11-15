import React, { useState } from 'react';

export const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: 'Reactor online. Ask about DevOps, AI, or me!', sender: 'AI' }]);
  const [input, setInput] = useState('');

  const getResponse = (query) => {
    const lower = query.toLowerCase();
    if (lower.includes('devops') || lower.includes('pipeline')) return 'DevOps tip: Use Kubernetes for auto-scaling AI models—reduced my latency by 30%!';
    if (lower.includes('ai') || lower.includes('ml')) return 'AI synergy: Integrate TensorFlow with Helm charts for green deployments.';
    if (lower.includes('green') || lower.includes('sustainable')) return 'Green tech: My CodeRefiner™ audits code for carbon efficiency—saved 15% emissions.';
    if (lower.includes('who') || lower.includes('bio')) return 'I\'m a software engineer specializing in AI/DevOps for sustainable systems. Built at TechMahindra.';
    return 'Entangle that query better—try "DevOps tips" or "AI scaling".';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, sender: 'User' }]);
      setTimeout(() => setMessages(prev => [...prev, { text: getResponse(input), sender: 'AI' }]), 500);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <h3>AI Overseer</h3>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <p key={i} className={msg.sender === 'AI' ? 'ai-msg' : 'user-msg'}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Query synergies... (e.g., 'DevOps tips?')"
        />
      </form>
    </div>
  );
};