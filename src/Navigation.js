import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="action-bar"><button className="action-bar__new" onClick={this.props.addNote}>+</button></nav>
    );
  }
}
