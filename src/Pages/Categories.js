import React from 'react';
import styles from './Categories.module.scss';

const Categories = () => (
  <div className={styles.categories}>
    <h2>Categories section</h2>
    <button type="button" className={styles.status}>Check Status</button>
  </div>
);

export default Categories;
