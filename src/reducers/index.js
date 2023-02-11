import { combineReducers } from 'redux';
import {
  REQUEST_PORTFOLIO_DATA,
  RECEIVE_PORTFOLIO_DATA,
} from '../actions';

const portfolioData = (state = {
  items: [],
  file: '',
}, action) => {
  switch (action.type) {
    case REQUEST_PORTFOLIO_DATA:
      return {
        ...state,
      };
    case RECEIVE_PORTFOLIO_DATA:
      return {
        ...state,
        file: action.file,
        name: action.data.name,
        items: action.data.sections,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  portfolioData,
});

export default rootReducer;
