import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

const MainNavigation = ()=> {
  return (
    <hearder className={styles.hearder}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </hearder>
  )
}

export default MainNavigation