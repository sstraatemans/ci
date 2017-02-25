import React from 'react';
const { func } = React.PropTypes;
import { PANEL_DEFAULT_HEIGHT } from './../../utils/constants';
import styles from './Panel.scss';

const Panel = React.createClass({
  propTypes: {
    openPanel: func
  },

  showMoreButton () {
    if(this.props.showMore){
      return (
        <span className={styles.showMore} onClick={this.props.openPanel} data-button="showmore">showmore</span>
      );
    }
  },
  render () {
    return (
      <div className={styles.panel} style={{height:PANEL_DEFAULT_HEIGHT+'px'}}>
        <div>
          {this.props.children}
        </div>
        {this.showMoreButton()}
      </div>
    );
  }
});

export default Panel;
