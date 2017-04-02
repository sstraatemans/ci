import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {authInit} from './store/actions';
import AsyncRoute from './utils/AsyncRoute';

import NotFound from './views/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import Landing from './views/Landing/Landing';


if (global) {
  global.System = { import () {} };
}



const App = () => (
  <Provider store={store}>
    <Layout>


      <Switch>
        <Route path="/" exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Landing/Landing')}/>} />
        <Route path="/news/search" exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/News/News')}/>} />
        <Route path="/twitter" exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Twitter/Twitter')}/>} />
        <Route path="/tabs" selectedTab='1' exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/TabsView/TabsView')}/>} />
        <Route path="/saga" selectedTab='1' exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Saga')}/>} />
        <Route path="/autosuggest" exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/Autosuggest')}/>} />
        <Route path="/login" exact component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./views/LoginView')}/>} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </Provider>
);

export default App;
