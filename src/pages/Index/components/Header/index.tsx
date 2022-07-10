import React, { FC } from 'react';
import cls from 'classnames';
import { PropsWithChildrenAndClassName } from '../../../../utils/type';
import './index.less';

const Header: FC<PropsWithChildrenAndClassName> = ({ children, className }) => {
  return (
    <header className={cls('page-header', className)}>
      <div className="page-header__container">
        <img
          className="page-header__avatar"
          src="https://avatars.githubusercontent.com/u/26891520?v=4"
          alt="avatar"
        />
        <div className="page-header__info">
          <div className="page-header__nickname">CoffeeWorm</div>
          <div className="page-header__intro">Always learning.</div>
        </div>
      </div>
      {children && <div className="page-header__children">{children}</div>}
    </header>
  );
};

export default Header;
