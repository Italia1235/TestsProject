import React from 'react';

import { Link } from 'react-router-dom';

import { PATH } from '../Routes/Routes';

import s from './Header.module.css';

const Header = () => (
  <div className={s.header}>
    <Link className={s.link} to={PATH.LOGIN}>
      Login
    </Link>
  </div>
);
export default Header;
