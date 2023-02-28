import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SiteImage extends Component {
  componentDidMount() {
    //
  }

  render() {
    const {
      data,
      isLoaded,
      sectionId,
    } = this.props;
    const {
      alt,
      css,
      hiresSrc,
      id,
      src,
    } = data;
    return (
      <div className={`${id} ${css}`}>
        {!isLoaded
          && (
            <div
              className="add-site-img"
              data-section={sectionId}
              data-hires-src={hiresSrc}
              data-src={src}
              data-alt={alt}
            />
          )}
        {isLoaded
          && (
            <img src={src} alt={alt} />
          )}
      </div>
    );
  }
}

SiteImage.propTypes = {
  data: PropTypes.shape(),
  isLoaded: PropTypes.bool,
  sectionId: PropTypes.string.isRequired,
};

SiteImage.defaultProps = {
  isLoaded: false,
};

export default SiteImage;
