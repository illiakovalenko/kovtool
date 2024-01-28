import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
