import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Title',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
  };

  render() {
    const { icon, title } = this.props;

    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
