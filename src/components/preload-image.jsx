import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PreloadImage extends Component {
  componentDidMount() {
    const { sectionImages } = this.props;
    sectionImages.push(this);
  }

  render() {
    const {
      alt,
      hiresSrc,
      isLoaded,
      section,
      src,
    } = this.props;
    return (
      <>
        {!isLoaded
          && (
            <div
              className="add-site-img"
              data-section={section}
              data-hires-src={hiresSrc}
              data-src={src}
              data-alt={alt}
            />
          )}
        {isLoaded
          && (
            <img src={src} alt={alt} />
          )}
      </>
    );
  }
}

PreloadImage.propTypes = {
  alt: PropTypes.string,
  hiresSrc: PropTypes.string,
  isLoaded: PropTypes.bool,
  section: PropTypes.string.isRequired,
  sectionImages: PropTypes.arrayOf(PropTypes.shape),
  src: PropTypes.string.isRequired,
};

export default PreloadImage;
