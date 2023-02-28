/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import {
  ASSET_LOAD_COMPLETE,
  ASSET_PRELOAD_COMPLETE,
  RECEIVE_SITE_DATA,
  REQUEST_SITE_DATA,
  HIDE_MENU,
  SET_ACTIVE_SECTION,
  SHOW_MENU,
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
    case RECEIVE_SITE_DATA:
      return {
        ...state,
        file: action.file,
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

export const activeSection = (state = {
  id: '',
}, action) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export const assetLoadStatus = (state = {
  assetLoadComplete: false,
  assetPreloadComplete: false,
}, action) => {
  switch (action.type) {
    case ASSET_PRELOAD_COMPLETE:
      return {
        ...state,
        assetPreloadComplete: true,
      };
    case ASSET_LOAD_COMPLETE:
      return {
        ...state,
        assetLoadComplete: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeSection,
  assetLoadStatus,
  menu,
  siteData,
});

export default rootReducer;
/* eslint-enable default-param-last */
