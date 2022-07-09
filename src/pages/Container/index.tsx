import React from 'react';
import './index.less';

interface ContainerProps {
  name: string;
}

export default ({ name }: ContainerProps) => (
  <div className="page-container">
    {name && <div className="page-container-title">{name}</div>}
    <div id="sub-app-container"></div>
  </div>
);
