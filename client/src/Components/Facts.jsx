import React, { useEffect, useState } from 'react';
import factsData from '../Assets/facts.json';

function Facts() {
  const [factIndex, setFactIndex] = useState(() =>
    Math.floor(Math.random() * factsData.facts.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex(prev => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * factsData.facts.length);
        } while (newIndex === prev);
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Did You Know?</h2>
      <p style={{ fontSize: '1rem', maxWidth: '600px', margin: 'auto', transition: 'opacity 0.5s' }}>
        {factsData.facts[factIndex]}
      </p>
    </div>
  );
}

export default Facts;
