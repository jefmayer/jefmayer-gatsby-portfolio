import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  assetLoadComplete,
  assetPreloadComplete,
} from '../actions';
import { initLoaderData } from '../modules/asset-loader/loader-data';
import { initAssetPreloader } from '../modules/asset-loader/asset-preloader';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.progressBarRef = React.createRef();
    this.bgLoaderRef = React.createRef();
  }

  componentDidMount() {
    const { data, dispatch } = this.props;
    initLoaderData(data);
    initAssetPreloader({
      onPreloadComplete: () => {
        console.log('onPreloadComplete');
        dispatch(assetPreloadComplete());
        /* setTimeout(() => {
          if (!isLoadComplete) {
            // Show backround loader
            this.bgLoaderRef.current.classList.add('show');
          }
        }, 3000); */
      },
      onLoadComplete: () => {
        console.log('onLoadComplete');
        this.bgLoaderRef.current.classList.remove('show');
        dispatch(assetLoadComplete());
      },
      onUpdate: () => {
        console.log('onUpdate');
      },
    });
    // Reset window to top
    setTimeout(() => {
      window.scroll(0, 0);
    }, 250);
  }

  render() {
    //
    return (
      <>
        <div className="background-loader-wrapper" ref={this.bgLoaderRef}>
          <div className="background-loader-progress-bar" ref={this.progressBarRef} />
        </div>
        <div className="section-loader-wrapper">
          <div className="section-loader-animation-wrapper">
            <div className="section-loader-animation">
              <div className="center-fill" />
              <div className="asset-loader" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Loader.propTypes = {
  // activeSectionId: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()),
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({
    assetLoadComplete,
    assetPreloadComplete,
  }, dispatch),
});

export default connect(mapDispatchToProps)(Loader);
