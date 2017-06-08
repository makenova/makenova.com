import React, { Component } from 'react';

export default class MediaLink extends Component {
  render() {
    const {
      link,
      iconName,
    } = this.props;

    return (
        <span>
          <a href={link}>
            <i className={`${iconName} icon-link`}></i>
          </a>
        </span>
    );
  }
}
