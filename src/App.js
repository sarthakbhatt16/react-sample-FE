import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import './App.css';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import axios from 'axios';

function SignOut() {
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  localStorage.removeItem('user');
  removeCookie('token');
  dispatch(logout());
  window.location.href = '/';
}

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(['token']);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (Object.keys(cookie).length !== 0 && loggedUser) {
      // Logged in
      dispatch(
        login(JSON.parse(loggedUser))
      );
    } else {
      // Logged out
      dispatch(logout());
    }

    return;
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
        {(!user) ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/patients" exact>
              <Dashboard 
                image='patients'
              />
            </Route>
            <Route path="/timesheet">
              <Dashboard 
                image='timesheet'
              />
            </Route>
            <Route path="/logistics">
              <Dashboard 
                image='logistics'
              />
            </Route>
            <Route path="/reports">
              <Dashboard 
                image='reports'
              />
            </Route>
            <Route path="/supply">
              <Dashboard 
                image='supply'
              />
            </Route>
            <Route path="/sales">
              <Dashboard 
                image='sales'
              />
            </Route>
            <Route path="/pos">
              <Dashboard 
                image='pos'
              />
            </Route>
            <Route path="/payments">
              <Dashboard 
                image='payments'
              />
            </Route>
            <Route path="/profile">
              <Dashboard 
                image='profile'
              />
            </Route>
            <Route 
              path="/logout"
              render={({ match }) => <SignOut /> }
            />
            <Route path="/">
              <Dashboard 
                image='home'
              />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
