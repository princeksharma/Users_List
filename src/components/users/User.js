import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }
  render() {
    const { title, body } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>
        <div className='card grid-2'>
          <div className='all-center'>
            <h1>{title}</h1>
            <p>Body: {body}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
