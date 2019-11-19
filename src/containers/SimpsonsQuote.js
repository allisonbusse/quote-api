import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading, getQuote } from '../selectors/simpsonsSelectors';
import { setQuotePromise } from '../actions/simpsonsActions';
import Quote from '../components/Quote';
import Load from '../components/Load';
import styles from './SimpsonsQuote.css';

const SimpsonsQuote = () => {
  const quote = useSelector(state => getQuote(state));
  const loading = useSelector(state => getLoading(state));
  const dispatch = useDispatch();
  const loadAnotherQuote = () => dispatch(setQuotePromise());

  useEffect(() => {
    loadAnotherQuote();
  }, []);

  if(loading) return <h1>Loading Quote...</h1>;


  return (
    <div className={styles.SimpsonsQuote}>
      <Quote quote={quote.quote}
        character={quote.character}
        image={quote.image} />
      <Load newQuote={loadAnotherQuote} />
    </div>

  );
};

export default SimpsonsQuote;
