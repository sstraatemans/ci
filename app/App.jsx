import React from 'react';
import { Match } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';
import AsyncRoute from './utils/AsyncRoute';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

if (global) {
  global.System = { import () {} };
}

const App = () => {
  return (
      <Provider store={store}>
        <div className='app'>
          <Header></Header>
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
          <Footer></Footer>
        </div>
      </Provider>
  );
};

export default App;
