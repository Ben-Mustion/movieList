import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import index from './index.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
  }



  render() {
    return (
      <div>
      <Header />
      <ul>
        <li>
           {this.state.movies.map((movie) => <ListItem movies = {movie} /> )}
        </li>
      </ul>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Movie List</h1>
        </div>
     );
  }
}

class ListItem extends React.Component {
  render() {
     return (
        <ul>
          <li>{this.props.movies.title}</li>
        </ul>
     );
  }
}

export default App;
