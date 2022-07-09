import React, { createElement } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import routes from './routes';

export default () => {
  return (
    <HashRouter>
      <Routes>
        {routes.map(({ name, path, component }) => (
          <Route
            path={path}
            key={name}
            element={createElement(component, { name })}
          />
        ))}
      </Routes>
    </HashRouter>
  );
};
