export const ADD_SECTION_IMAGES = 'ADD_SECTION_IMAGES';
export const HIDE_MENU = 'HIDE_MENU';
export const RECEIVE_SITE_DATA = 'RECEIVE_SITE_DATA';
export const REQUEST_SITE_DATA = 'REQUEST_SITE_DATA';
export const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';
export const SHOW_MENU = 'SHOW_MENU';

export const requestSiteData = () => ({
  type: REQUEST_SITE_DATA,
});

export const receiveSiteData = (data, file) => ({
  type: RECEIVE_SITE_DATA,
  data,
  file,
});

export const fetchSiteData = (file) => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestSiteData());
  return fetch(file)
    .then((response) => response.json())
    .then((json) => dispatch(receiveSiteData(json, file)));
};

export const addSectionImages = (data, sectionId) => ({
  type: ADD_SECTION_IMAGES,
  data,
  sectionId,
});

export const showMenu = () => ({
  type: SHOW_MENU,
});

export const hideMenu = () => ({
  type: HIDE_MENU,
});

export const setActiveSection = (id) => ({
  type: SET_ACTIVE_SECTION,
  id,
});
