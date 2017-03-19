import React from 'react';
import Rx, {Subject} from 'rxjs/Rx';
import axios from 'axios';


class AutoSuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: []};


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
        console.log(d.data);
        this.setState({search: d.data});
      });

    });
      // .map(function (e) {
      //   return e.target.value; // Project the text from the input
      // })
      // .filter(function (text) {
      //   return text.length > 2; // Only if the text is longer than 2 characters
      // })
      // .debounce(750 /* Pause for 750ms */ )
      // .distinctUntilChanged(); // Only if the value has changed


  }

  search () {

  }

  handleChange (e) {

    var searcher = this.keyup$.next(e);

    // searcher.subscribe(
    //   function (data) {
    //     this.setState({
    //       search: data
    //     });
    //   },
    //   function (error) {
    //     alert('problems');
    //   });

  }

  render () {
    console.log(this.state.search);
    return (
      <div className="autosuggest">
        <input type="text" onChange={this.handleChange.bind(this)}/>
        {
          this.state.search.map((d) => {
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
