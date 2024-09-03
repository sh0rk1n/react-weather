import React from 'react';
import heartPath from '../../shared/assets/heart.svg';

const Footer = ({ isOpen }) => {
  return (
    <footer className={isOpen ? 'footer footer_loaded' : 'footer'}>
      <p className="footer__text">Made with</p>
      <img src={heartPath} alt="сердце" />
      <p className="footer__text">
        by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/sh0rk1n"
          className="footer__link"
        >
          Sh0rk1n
        </a>
      </p>
    </footer>
  );
};

export default Footer;
