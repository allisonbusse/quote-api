import React from 'react';
import SimpsonsQuote from '../containers/SimpsonsQuote';
import Header from './Header';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <SimpsonsQuote />
    </div>
  );
};

export default App;
