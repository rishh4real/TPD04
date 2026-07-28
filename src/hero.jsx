import React from 'react';
import { createRoot } from 'react-dom/client';
import AnimatedHeadline from './components/AnimatedHeadline.jsx';

const rootElement = document.getElementById('animated-hero-root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <AnimatedHeadline />
    </React.StrictMode>,
  );
}
