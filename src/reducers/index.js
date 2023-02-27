/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import {
  ADD_SECTION_IMAGES,
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
        items: action.data.sections.map((section) => ({
          ...section,
          allHiResAssetsLoaded: false,
          allInitialAssetsLoaded: false,
          isActive: false,
          siteImages: [],
        })),
      };
    case ADD_SECTION_IMAGES:
      return {
        ...state,
        items: state.items.map((section) => {
          if (section.name === action.sectionName && !action.isHires) {
            return {
              ...section,
              siteImages: action.data,
            };
          }
          return section;
        }),
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

export const showMenu = () => ({
  type: SHOW_MENU,
});

export const hideMenu = () => ({
  type: HIDE_MENU,
});

export const activeSection = (state = {
  activeSection: '',
}, action) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeSection,
  menu,
  siteData,
});

export default rootReducer;
/* eslint-enable default-param-last */
