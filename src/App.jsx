import React, { useState } from 'react';
import Cover from './components/Cover';
import Slide from './components/Slide';
import LanguageToggle from './components/LanguageToggle';

const slides = [
  { title: 'What is Productizing AI?', content: 'Turning machine learning models into usable products.' },
  { title: 'Why It Matters', content: 'Bridges research and real-world applications. Drives business impact.' }
];

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="app">
      <LanguageToggle />
      {index === 0 ? <Cover onNext={() => setIndex(1)} /> : <Slide slide={slides[index - 1]} />}
    </div>
  );
}