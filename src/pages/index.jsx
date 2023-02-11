/* eslint-disable react/function-component-definition */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPortfolioData } from '../actions';
import Seo from '../components/seo';
import Header from '../components/header';
import Layout from '../components/layout';

class IndexPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPortfolioData('portfolio-data.json'));
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <Header
          data={data}
        />
        <Layout>
          <h1>Portfolio!</h1>
        </Layout>
      </>
    );
  }
}

export const Head = () => (
  <Seo title="Jef Mayer" />
);

IndexPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => {
  const { portfolioData } = state;
  const {
    file,
    items: data,
  } = portfolioData;
  return {
    data,
    file,
  };
};

export default connect(mapStateToProps)(IndexPage);
/* eslint-enable react/function-component-definition */
