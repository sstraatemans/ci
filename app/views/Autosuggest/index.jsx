import React from 'react';
import Rx, {Subject} from 'rxjs/Rx';
import axios from 'axios';
const { array } = React.PropTypes;
import AutoSuggest from './../../components/AutoSuggest';

class Autosuggest extends React.Component{

  constructor(props) {
    super(props);
    this.state = {search: []};
  }

  componentDidMount () {
    this.keyup$ = new Subject();
    this.keyup$.map((e) => {
      return e.target.value;
    })
    .filter((val) => {
      return val.length > 2;
    })
    .debounceTime(750)
    .distinctUntilChanged()
    .subscribe((val) => {
      return axios.get(`http://localhost:3000/shows?q=${val}`).then((d) => {
        this.setState({search: d.data});
      });

    });
  }

  componentWillUnmount () {
    this.keyup$.unsubscribe();
  }

  handleChange (e) {
    this.keyup$.next(e);
  }

  render (){
    return (
      <div>
        <AutoSuggest changeHandler={this.handleChange.bind(this)} data={this.state.search} />
      </div>
    );
  }
};


export default Autosuggest;
