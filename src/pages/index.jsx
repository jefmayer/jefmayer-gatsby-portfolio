/* eslint-disable react/function-component-definition */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchSiteData,
  hideMenu,
  setActiveSection,
  showMenu,
} from '../actions';
import { getSectionIdFromClassNames } from '../utils/section-utils';
import { initScrollObserver } from '../utils/browser-scroll';
import { initScrollMagicController } from '../utils/scroll-magic';
import AmplifyIt from '../components/sections/amplifyit';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/sections/intro';
import Loader from '../components/loader';
import Layout from '../components/layout';
import Seo from '../components/seo';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    this.getSectionById = this.getSectionById.bind(this);
    initScrollMagicController();
    initScrollObserver({
      onUpdate: (classNames, isIntersecting) => {
        const id = getSectionIdFromClassNames(classNames);
        console.log(`${id}, ${isIntersecting}`);
        if (isIntersecting) {
          dispatch(setActiveSection(id));
        }
        // Update Loader
      },
    });
    // Reset window to top
    setTimeout(() => {
      window.scroll(0, 0);
    }, 250);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSiteData('portfolio-data.json'));
  }

  onMenuClick() {
    const { dispatch, isMenuOpen } = this.props;
    if (!isMenuOpen) {
      dispatch(showMenu());
    } else {
      dispatch(hideMenu());
    }
  }

  onNavClick(id) {
    const { dispatch } = this.props;
    dispatch(setActiveSection(id));
  }

  getSectionById(id) {
    const { data } = this.props;
    return data.find((section) => section.id === id);
  }

  render() {
    const {
      activeSectionId,
      assetsLoaded,
      assetsPreloaded,
      data,
    } = this.props;
    const isDataLoaded = data.length > 0;
    return (
      <Layout>
        {isDataLoaded
        && (
          <>
            <Loader
              activeSectionId={activeSectionId}
              data={data}
            />
            <Header
              activeSectionId={activeSectionId}
              data={data}
              onMenuClick={this.onMenuClick}
              onNavClick={this.onNavClick}
            />
            <Intro
              assetLoadComplete={assetsLoaded}
              assetPreloadComplete={assetsPreloaded}
            />
            <AmplifyIt
              assetLoadComplete={assetsLoaded}
              assetPreloadComplete={assetsPreloaded}
              data={this.getSectionById('amplifyit')}
            />
            <Footer />
          </>
        )}
      </Layout>
    );
  }
}

export const Head = () => (
  <Seo title="Jef Mayer" />
);

IndexPage.propTypes = {
  assetsLoaded: PropTypes.bool.isRequired,
  assetsPreloaded: PropTypes.bool.isRequired,
  activeSectionId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    activeSection,
    assetLoadStatus,
    menu,
    siteData,
  } = state;
  const {
    id: activeSectionId,
  } = activeSection;
  const {
    assetLoadComplete: assetsLoaded,
    assetPreloadComplete: assetsPreloaded,
  } = assetLoadStatus;
  const {
    isOpen: isMenuOpen,
  } = menu;
  const {
    file,
    items: data,
  } = siteData;
  return {
    activeSectionId,
    assetsLoaded,
    assetsPreloaded,
    data,
    file,
    isMenuOpen,
  };
};

export default connect(mapStateToProps)(IndexPage);
/* eslint-enable react/function-component-definition */
