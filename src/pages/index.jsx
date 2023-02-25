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
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    initScrollMagicController();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSiteData('portfolio-data.json'));
    // initLoad();
  }

  onMenuClick() {
    const { dispatch, isMenuOpen } = this.props;
    if (!isMenuOpen) {
      dispatch(showMenu());
    } else {
      dispatch(hideMenu());
    }
  }

  onNavClick(sectionName) {
    const { dispatch } = this.props;
    dispatch(setActiveSection(sectionName));
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <Header
          data={data}
          onMenuClick={this.onMenuClick}
          onNavClick={this.onNavClick}
        />
        <Layout>
          <Intro />
          <AmplifyIt />
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
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isMenuOpen: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { siteData, menu } = state;
  const {
    file,
    items: data,
  } = siteData;
  const {
    isOpen: isMenuOpen,
  } = menu;
  return {
    data,
    file,
    isMenuOpen,
  };
};

export default connect(mapStateToProps)(IndexPage);
/* eslint-enable react/function-component-definition */
