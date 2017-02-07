import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        landing<br/>
        <Link to="/news/search">
          <FormattedMessage id="app.hello_world" defaultMessage="click here" description="Hello world header greeting" />
        </Link>
      </div>
    );
  }
});

export const Unwrapped = Landing;

export default Landing;
