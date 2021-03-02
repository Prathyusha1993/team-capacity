//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import SideNav from './components/sidebar/SideNav';
import Nav from './components/Nav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <div className="App">
        <Nav />
        <SideNav />
      </div>
    );
  }
}

export default App;
