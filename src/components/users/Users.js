import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading, searchText }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users
          .filter((user) => {
            return (
              user.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            );
          })
          .map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
