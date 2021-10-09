import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Spipping.js/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
