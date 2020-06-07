import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UserItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { avatar_url, html_url, login } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          className='round-img'
          src={avatar_url}
          alt={`${login}'s avatar`}
          style={{
            width: '60px',
          }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
