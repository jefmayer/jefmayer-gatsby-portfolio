/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import {
  RECEIVE_SITE_DATA,
  REQUEST_SITE_DATA,
  HIDE_MENU,
  // SET_ACTIVE_SECTION,
  SHOW_MENU,
  UPDATE_SITE_DATA,
} from '../actions';

const siteData = (state = {
  items: [],
  file: '',
}, action) => {
  switch (action.type) {
    case REQUEST_SITE_DATA:
      return {
        ...state,
      };
    case UPDATE_SITE_DATA:
      return {
        ...state,
      };
    case RECEIVE_SITE_DATA:
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

const menu = (state = {
  isOpen: false,
}, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_MENU:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  siteData,
  menu,
});

export default rootReducer;
/* eslint-enable default-param-last */
