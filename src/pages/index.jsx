/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSiteData,
  setActiveSection,
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
import Samsung from '../components/sections/samsung';
import Seo from '../components/seo';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.getSectionById = this.getSectionById.bind(this);
    this.sectionComponentMap = [
      {
        id: 'amplifyit',
        SectionComponent: AmplifyIt,
      },
      {
        id: 'samsung',
        SectionComponent: Samsung,
      },
    ];
    initScrollMagicController();
    initScrollObserver({
      onUpdate: (classNames, isIntersecting) => {
        const id = getSectionIdFromClassNames(classNames);
        // console.log(`${id}, ${isIntersecting}`);
        if (isIntersecting) {
          dispatch(setActiveSection(id));
        }
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

  getSectionById(id) {
    const { data } = this.props;
    return data.find((section) => section.id === id);
  }

  render() {
    const {
      activeSectionId,
      assetLoadComplete,
      assetLoadPercentage,
      assetPreloadComplete,
      assetPreloadPercentage,
      data,
      isMenuOpen,
    } = this.props;
    const isDataLoaded = data.length > 0;
    return (
      <Layout>
        {isDataLoaded
        && (
          <>
            <Loader
              // Need to update the loader when the activeSectionId changes
              activeSectionId={activeSectionId}
              assetLoadComplete={assetLoadComplete}
              assetLoadPercentage={assetLoadPercentage}
              assetPreloadComplete={assetPreloadComplete}
              data={data}
            />
            <Header
              activeSectionId={activeSectionId}
              data={data}
              isMenuOpen={isMenuOpen}
              onMenuClick={this.onMenuClick}
              onNavClick={this.onNavClick}
            />
            <Intro
              assetLoadComplete={assetLoadComplete}
              assetPreloadComplete={assetPreloadComplete}
              assetPreloadPercentage={assetPreloadPercentage}
            />
            {this.sectionComponentMap.map((section) => {
              const {
                id,
                SectionComponent,
              } = section;
              return (
                <SectionComponent
                  assetLoadComplete={assetLoadComplete}
                  assetPreloadComplete={assetPreloadComplete}
                  data={this.getSectionById(id)}
                />
              );
            })}
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
  assetLoadComplete: PropTypes.bool.isRequired,
  assetLoadPercentage: PropTypes.number.isRequired,
  assetPreloadComplete: PropTypes.bool.isRequired,
  assetPreloadPercentage: PropTypes.number.isRequired,
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
    assetLoadComplete,
    assetLoadPercentage,
    assetPreloadComplete,
    assetPreloadPercentage,
  } = assetLoadStatus;
  const {
    isOpen: isMenuOpen,
  } = menu;
  const {
    items: data,
  } = siteData;
  return {
    activeSectionId,
    assetLoadComplete,
    assetLoadPercentage,
    assetPreloadComplete,
    assetPreloadPercentage,
    data,
    isMenuOpen,
  };
};

export default connect(mapStateToProps)(IndexPage);
/* eslint-enable react/function-component-definition */
