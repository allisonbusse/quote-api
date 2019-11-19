export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(quote => {
      return { quote: quote[0].quote, 
        character: quote[0].character, 
        image: quote[0].image };
    });
};
