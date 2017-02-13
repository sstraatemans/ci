import React from 'react';
import { Match } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import AsyncRoute from './utils/AsyncRoute';


import Layout from './components/Layout/Layout';


if (global) {
  global.System = { import () {} };
}

const App = () => (
  <Provider store={store}>
    <Layout>
      <Match
        exactly
        pattern='/'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./components/Landing/Landing')} />}
      />
      <Match
        exactly
        pattern='/news/search'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./components/News/News')} />}
      />
    </Layout>
  </Provider>
);

export default App;
