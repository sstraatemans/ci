import React from 'react';
import {Tabs, TabList, Tab, TabPanel} from './../../components/Tabs';

const TabsView = React.createClass({

  render (){
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab key="1" title="tab 1"></Tab>
            <Tab key="2" title="tab 2"></Tab>
          </TabList>
        </Tabs>
      </div>
    );
  }
});

export default TabsView;
