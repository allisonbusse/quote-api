import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character, image }) => {

  return (
    <div>
      <img src={image} alt={character} />
      <p>{quote}</p>
      <p>Said by: {character}</p>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;

