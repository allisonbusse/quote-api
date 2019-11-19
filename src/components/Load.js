import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ newQuote }) => {

  return (
    <button onClick={newQuote}>Another Quote Man</button>
  );
};

Load.propTypes = {
  newQuote: PropTypes.func.isRequired
};




export default Load;
