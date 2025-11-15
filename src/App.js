import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactorCanvas } from './components/ReactorCore';
import { Alerts } from './components/Alerts';
import { Chatbot } from './components/Chatbot';
import './styles.css';

function App() {
  const [initiated, setInitiated] = useState(false);

  return (
    <Router>
      <div className="ui-overlay">
        <Routes>
          <Route path="/" element={
            <>
              <ReactorCanvas initiated={initiated} />
              <Alerts />
              <Chatbot />
              {!initiated ? (
                <button
                  onClick={() => setInitiated(true)}
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 30, pointerEvents: 'all' }}
                >
                  Initiate Fission
                </button>
              ) : null}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;