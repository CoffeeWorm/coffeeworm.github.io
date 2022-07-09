import React from 'react';
import { useNavigate } from 'react-router';
import routes from '../../router/routes';
import './index.less';

export default () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="page-index">
      <div className="title">Test tools</div>
      <ol className="nav-list">
        {routes.slice(1).map(({ path, name }) => (
          <li className="nav-list-item" onClick={() => handleClick(path)}>
            {name}
          </li>
        ))}
      </ol>
    </div>
  );
};
