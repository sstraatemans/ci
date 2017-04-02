import React from 'react';
import axios from 'axios';
import { Match, Miss, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import {authInit} from './store/actions';
import AsyncRoute from './utils/AsyncRoute';

import NotFound from './views/NotFound/NotFound';
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
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Landing/Landing')} />}
      />
      <Match
        exactly
        pattern='/news/search'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/News/News')} />}
      />
      <Match
        exactly
        pattern='/twitter'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Twitter/Twitter')} />}
      />
      <Match
        exactly
        pattern='/tabs'
        selectedTab='1'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/TabsView/TabsView')} />}
      />
      <Match
        exactly
        pattern='/saga'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Saga')} />}
      />
      <Match
        exactly
        pattern='/autosuggest'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Autosuggest')} />}
      />
      <Match
        exactly
        pattern='/login'
        component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/LoginView')} />}
      />
      <Miss component={NotFound} />
    </Layout>
  </Provider>
);

export default App;
