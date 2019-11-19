import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote, character, image }) => {

  return (
    <div className={styles.Quote}>
      <img src={image} alt={character} />
      <h3>{character}:</h3>
      <p>{quote}</p>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;

