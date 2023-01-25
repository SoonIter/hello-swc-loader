import React from 'react';
import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  return <div>hello</div>;
};
let app = document.querySelector('#app')!;

createRoot(app).render(App());
