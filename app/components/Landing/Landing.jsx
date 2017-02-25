import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import {Row, Panel} from './../Panel';

const Landing = React.createClass({


  render () {
    return (
      <div className='landing'>
        <Row>
          <Panel key="2" showMore="true">test<br/>sdfsdf<br/><br/>sdf<br/>sdsf<br/>sdf<br/>ssdf<br/><br/><br/>sdfsdfssdf<br/><br/><br/>sssdfsdf</Panel>
          <Panel key="1">test<br/>sdfsdf<br/><br/>sdf<br/>sdsf<br/>sdf<br/>ssdf<br/><br/><br/>sdfsdf</Panel>
        </Row>


      </div>
    );
  }
});

export const Unwrapped = Landing;

export default Landing;
