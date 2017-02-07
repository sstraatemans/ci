import React from 'react';
import { Match } from 'react-router';
import AsyncRoute from './utils/AsyncRoute';

if (global) {
  global.System = { import () {} };
}

if (typeof window !== 'undefined') {
    window.React = React;
}

const App = () => {
  return (
        <div className='app'>
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
        </div>
  );
};

export default App;
