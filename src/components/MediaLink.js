import React, { Component } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  &:link,
  &:visited,
  &:active {
    color: #FFFFFF;
    text-decoration: none;
  }

  &:hover {
    color: #FFC107;
  }
`;

const Icon = styled.i`
  font-size: 2em;
`;

export default class MediaLink extends Component {
  render() {
    const {
      link,
      iconName,
    } = this.props;

    return (
        <span>
          <Link href={link}>
            <Icon className={iconName}></Icon>
          </Link>
        </span>
    );
  }
}
