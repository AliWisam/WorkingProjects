
import React , {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDrUMVZUIEo4Qo-Re-A3f9oO3Q_b1DE1ak';


// Create a new component, this component should prodcuce some HTML.

class App extends Component{
  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key:API_KEY, term: 'surfboards'},(data)=>{
      this.setState[{videos: data}];
    });
  }
  render(){
    return(
      <div>
        <SearchBar/>
      </div>
    );
  }
}
//Take this component generated HTMl and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));