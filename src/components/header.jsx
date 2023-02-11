import * as React from 'react';
import PropTypes from 'prop-types';

function Header({ data }) {
  return (
    <header className="header">
      <div className="header-logo" />
      <nav className="site-nav">
        <div className="nav-menu">
          <div className="nav-highlight" />
          <div className="nav-menu-inner">
            {data.map((section) => {
              const {
                client,
                name,
                role,
                title,
              } = section;
              return (
                <React.Fragment key={name}>
                  <button type="button" className="scene-navigation-btn" role="menuitem" data-scene-name={name}>
                    <span className="heading-md">{client}</span>
                    <span className="body-regular">{title}</span>
                    <span className="heading-xs">Role</span>
                    <span className="body-sm">{role}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="nav-menu-overlay" />
        <button type="button" className="nav-menu-btn">
          <span className="nav-btn-dot nav-dot-top" />
          <span className="nav-btn-dot nav-dot-mid" />
          <span className="nav-btn-dot nav-dot-btm" />
          <span className="nav-label">Work</span>
          <span className="nav-close-btn">
            <span className="nav-btn-dot nav-dot-left" />
            <span className="nav-btn-dot nav-dot-right" />
            <span className="nav-btn-dot nav-dot-top-left" />
            <span className="nav-btn-dot nav-dot-top-right" />
            <span className="nav-btn-dot nav-dot-btm-left" />
            <span className="nav-btn-dot nav-dot-btm-right" />
          </span>
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Header;
