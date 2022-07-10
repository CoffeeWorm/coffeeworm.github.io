import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sider from './components/Sider';
import './index.less';

export default () => {
  return (
    <div className="page-index">
      <Header />
      <Main />
      <Sider />
    </div>
  );
};
