import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.inner}>
        <div className={styles.dnavigation}>
          <Link to="/numberlist">Phonebook</Link>
          <Link to="/">Restart App</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
