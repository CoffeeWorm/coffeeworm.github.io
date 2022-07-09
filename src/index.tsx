import React from 'react';
import reactDOM from 'react-dom/client';
import { registerMicroApps, start } from 'qiankun';
import App from './App';
import 'normalize.css';
import './index.less';

const root = reactDOM.createRoot(document.querySelector('#app')!);

root.render(<App />);

registerMicroApps([
  {
    name: 'Json2Querystring',
    entry: 'https://coffeeworm.github.io/json2querystring/index.html',
    container: '#sub-app-container',
    activeRule: '#/json2querystring'
  }
]);

start({ sandbox: { strictStyleIsolation: true } });
