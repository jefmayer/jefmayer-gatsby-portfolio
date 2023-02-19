/* eslint-disable react/function-component-definition */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSiteData } from '../actions';
import { initScrollMagicController } from '../utils/scroll-magic';
// import { initLoad } from '../modules/loaders/initial-asset-loader';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/sections/intro';
import Layout from '../components/layout';
import Seo from '../components/seo';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    initScrollMagicController();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSiteData('portfolio-data.json'));
    // initLoad();
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <Header
          data={data}
        />
        <Layout>
          <Intro />
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
};

const mapStateToProps = (state) => {
  const { siteData } = state;
  const {
    file,
    items: data,
  } = siteData;
  return {
    data,
    file,
  };
};

export default connect(mapStateToProps)(IndexPage);
/* eslint-enable react/function-component-definition */
