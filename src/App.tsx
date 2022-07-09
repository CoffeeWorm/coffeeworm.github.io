import React, { StrictMode, Suspense } from 'react';
import Router from './router';

export default () => (
  <StrictMode>
    <div className="app-layout-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </div>
  </StrictMode>
);
