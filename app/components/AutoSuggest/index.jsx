import React from 'react';

class AutoSuggest extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange (e) {
    this.props.changeHandler(e);
  }

  render () {
    return (
      <div className="autosuggest">
        <input type="text" onChange={this.handleChange.bind(this)}/>
        {
          this.props.data.map((d) => {
            return (
              <div key={d.imdbID}>{d.title}</div>
            );
          })
        }
      </div>
    );
  }
}

export default AutoSuggest;
