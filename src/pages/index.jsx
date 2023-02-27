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
// import { initLoad } from '../modules/loaders/initial-asset-loader';
import AmplifyIt from '../components/sections/amplifyit';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/sections/intro';
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
    const { activeSectionId, data } = this.props;
    const isDataLoaded = data.length > 0;
    if (isDataLoaded) {
      /* initLoad({
        data,
        onUpdate: (d) => {
          console.log(d);
        },
      }); */
    }
    return (
      <>
        <div className="background-loader-wrapper">
          <div className="background-loader-progress-bar" />
        </div>
        <div className="section-loader-wrapper">
          <div className="section-loader-animation-wrapper">
            <div className="section-loader-animation">
              <div className="center-fill" />
              <div className="asset-loader" />
            </div>
          </div>
        </div>
        <Header
          activeSectionId={activeSectionId}
          data={data}
          onMenuClick={this.onMenuClick}
          onNavClick={this.onNavClick}
        />
        <Layout>
          {isDataLoaded
          && (
            <>
              <Intro />
              <AmplifyIt
                data={this.getSectionById('amplifyit')}
              />
            </>
          )}
        </Layout>
        <Footer />
      </>
    );
  }
}

export const Head = () => (
  <Seo title="Jef Mayer" />
);

IndexPage.propTypes = {
  activeSectionId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMenuOpen: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const {
    activeSection,
    menu,
    siteData,
  } = state;
  const {
    id: activeSectionId,
  } = activeSection;
  const {
    isOpen: isMenuOpen,
  } = menu;
  const {
    file,
    items: data,
  } = siteData;
  return {
    activeSectionId,
    data,
    file,
    isMenuOpen,
  };
};

export default connect(mapStateToProps)(IndexPage);
/* eslint-enable react/function-component-definition */
