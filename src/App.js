import React from 'react';
// import logo from './logo.svg';
import routes from './routes'
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  // console.log('Look at me!', props)
  return (
    <div className="App">
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
