import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../router/routes';
import './index.less';

const Sider = () => {
  const navigate = useNavigate();
  return (
    <section className="page-sider">
      <div className="page-sider__title">Testing Tools</div>
      <ul className="page-sider__list">
        {routes.slice(1).map(({ path, name }) => (
          <li
            className="page-sider__list-item"
            key={path}
            onClick={() => navigate(path)}
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sider;
