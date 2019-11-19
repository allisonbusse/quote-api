import { getQuotes } from '../services/simpsonsApi';

export const SET_QUOTE = 'SET_QUOTE';
export const SET_QUOTE_LOADING = 'SET_QUOTE_LOADING';
export const SET_QUOTE_DONE = 'SET_QUOTE_DONE';

// export const setQuote = () => dispatch => {
//   dispatch({
//     type: SET_QUOTE_LOADING
//   });

//   return getQuotes()
//     .then(quote => {
//       dispatch({
//         type: SET_QUOTE,
//         payload: quote
//       });

//       dispatch({
//         type: SET_QUOTE_DONE
//       });
//     });
// };

export const setQuotePromise = () => ({
  type: SET_QUOTE,
  pendingType: SET_QUOTE_LOADING,
  fulfilledType: SET_QUOTE_DONE,
  payload: getQuotes()
});

