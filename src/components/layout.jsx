/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import './scss/layout.scss';

function Layout({ children }) {
  return (
    <main>{children}</main>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
/* eslint-enable react/forbid-prop-types */
