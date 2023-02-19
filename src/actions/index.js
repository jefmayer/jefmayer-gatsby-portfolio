export const RECEIVE_SITE_DATA = 'RECEIVE_SITE_DATA';
export const REQUEST_SITE_DATA = 'REQUEST_SITE_DATA';
export const HIDE_MENU = 'HIDE_MENU';
export const SHOW_MENU = 'SHOW_MENU';
export const UPDATE_SITE_DATA = 'UPDATE_SITE_DATA';

export const requestSiteData = () => ({
  type: REQUEST_SITE_DATA,
});

export const receiveSiteData = (json, file) => ({
  type: RECEIVE_SITE_DATA,
  data: json,
  file,
});

export const fetchSiteData = (file) => dispatch => { /* eslint-disable-line arrow-parens */
  dispatch(requestSiteData());
  return fetch(file)
    .then((response) => response.json())
    .then((json) => dispatch(receiveSiteData(json, file)));
};

export const updateSiteData = (data) => ({
  type: UPDATE_SITE_DATA,
  data,
});

export const showMenu = () => ({
  type: SHOW_MENU,
});

export const hideMenu = () => ({
  type: HIDE_MENU,
});
