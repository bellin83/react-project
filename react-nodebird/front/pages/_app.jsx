import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from "../components/AppLayout";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from "../reducers";

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css' />
        <script src='https://cndjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js' />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const store = createStore(reducer, initialState);
  // 여기다가 store 커스터마이징
  return store;
})(NodeBird);
