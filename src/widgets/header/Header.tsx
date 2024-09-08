import React from 'react';
import logo from 'shared/assets/logo.svg';

const Header = ({ isOpen }) => {
  return (
    <header className={isOpen ? 'header header_loaded' : 'header'}>
      <a
        href="https://github.com/sh0rk1n/weather"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt="Логотип" />
      </a>
    </header>
  );
};

export default Header;
