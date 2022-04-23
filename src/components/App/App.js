import './App.css';

import { Component } from 'react';

import ELibraryService from '../../repository/elibraryRepository';
import Authors from '../Authors/authors';

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    authors: []
  }
}
render(){
  return (<div>
    <Authors authors = {this.state.authors}/>
  </div>);
}
loadAuthors = () => {
  ELibraryService.fetchAuthors()
  .then((data) =>{
    this.setState({
      authors: data.data
    })
  })
}
componentDidMount(){
this.loadAuthors();
}
}

export default App;
