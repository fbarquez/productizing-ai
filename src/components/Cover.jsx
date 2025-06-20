import React, { useEffect } from 'react';
export default function Cover({ onNext }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js';
    script.onload = () => {
      window.particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@master/demo/particles.json');
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="cover" className="active">
      <div id="particles-js"></div>
      <h1>Productizing AI</h1>
      <p>From Model to Market</p>
      <button onClick={onNext} className="start-button">→ Start</button>
    </section>
  );
}