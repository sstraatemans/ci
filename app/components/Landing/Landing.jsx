import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import {Row, Panel} from './../Panel';

const Landing = React.createClass({


  render () {
    return (
      <div className='landing'>
        <Row>
          <Panel key="1">test</Panel>
          <Panel key="2" showMore="true">test2</Panel>
        </Row>


      </div>
    );
  }
});

export const Unwrapped = Landing;

export default Landing;
