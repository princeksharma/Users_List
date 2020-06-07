import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { id, name, username, email, phone } }) => {
  return (
    <div className='card text-center'>
      <h3>{id}</h3>
      <h3>Name: {name}</h3>
      <h3>UserName: {username}</h3>
      <strong>Email: {email}</strong>
      <br />
      <strong>Phone: {phone}</strong>
      <div>
        <Link to={`/user/${id}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
