import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    searchText: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ users: res.data, loading: false });
  }

  getUser = async (id) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=1&&id=${id}`
    );

    this.setState({ user: res.data[0], loading: false });
  };

  searchUpdate = (value) => {
    this.setState({
      searchText: value,
    });
  };

  render() {
    const { users, loading, user, searchText } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUpdate={this.searchUpdate}
                      searchText={searchText}
                    />
                    <Users
                      loading={loading}
                      users={users}
                      searchText={searchText}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:id'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
