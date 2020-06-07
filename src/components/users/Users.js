import React, { Component } from 'react';
import { FakeUserCreator } from '../../utils/fakeUserHelper';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

export class Users extends Component {
  static propTypes = {
    users: PropTypes.array,
    numOfFakeUsers: PropTypes.number,
  };

  state = {
    users: [],
  };

  isLoaded = false;

  componentDidMount() {
    const { numOfFakeUsers, users } = this.props;

    if (users) {
      this.setState({
        users,
      });

      return;
    }

    if (!this.isLoaded && numOfFakeUsers) {
      const userCreator = new FakeUserCreator();

      this.setState({
        users: userCreator.makeFakeUsers(numOfFakeUsers),
      });

      this.isLoaded = true;
    }
  }

  render() {
    const { users } = this.state;

    return (
      <div className='grid-6'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
