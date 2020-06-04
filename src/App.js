import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import AuthHeader from './components/AuthHeader'
import routes from './routes'
import { connect } from 'react-redux'
import './App.css';

function App(props) {
  // console.log('Look at me!', props)
  return (
    <div className="App">
      {props.isLoggedIn ? <Header /> : <AuthHeader />}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
