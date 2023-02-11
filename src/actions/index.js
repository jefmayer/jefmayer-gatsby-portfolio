export const REQUEST_PORTFOLIO_DATA = 'REQUEST_PORTFOLIO_DATA';
export const RECEIVE_PORTFOLIO_DATA = 'RECEIVE_PORTFOLIO_DATA';

export const requestPortfolioData = () => ({
  type: REQUEST_PORTFOLIO_DATA,
});

export const receivePortfolioData = (json, file) => ({
  type: RECEIVE_PORTFOLIO_DATA,
  data: json,
  file,
});

export const fetchPortfolioData = (file) => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestPortfolioData());
  return fetch(file)
    .then((response) => response.json())
    .then((json) => dispatch(receivePortfolioData(json, file)));
};
