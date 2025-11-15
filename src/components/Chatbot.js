import React, { useState, useRef, useEffect } from 'react';

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Reactor online. Ask about DevOps, AI, or me!', sender: 'AI' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const getResponse = (q) => {
    const l = q.toLowerCase();
    if (l.includes('devops')) return 'Use K8s for auto-scaling AI – cut latency 30%!';
    if (l.includes('ai')) return 'TensorFlow + Helm = green deployments.';
    if (l.includes('green')) return 'CodeRefiner™ audits carbon – saved 15%.';
    if (l.includes('who')) return 'Software Engineer – AI/DevOps for sustainable systems.';
    return 'Try “DevOps tips” or “AI scaling”.';
  };

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(m => [...m, { text: input, sender: 'User' }]);
    setTimeout(() => setMessages(m => [...m, { text: getResponse(input), sender: 'AI' }]), 600);
    setInput('');
  };

  // focus input when component mounts
  useEffect(() => { inputRef.current?.focus(); }, []);

  return (
    <div className="chatbot">
      <h3>AI Overseer</h3>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <p key={i} className={m.sender === 'AI' ? 'ai-msg' : 'user-msg'}>
            <strong>{m.sender}:</strong> {m.text}
          </p>
        ))}
      </div>
      <form onSubmit={send}>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Query synergies..."
        />
      </form>
    </div>
  );
};