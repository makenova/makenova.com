import React, { Component } from 'react';

export default class Name extends Component {
  render() {
    return (
      <p className="name">{this.props.name}</p>
    );
  }
}
