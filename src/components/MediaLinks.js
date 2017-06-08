import React, { Component } from 'react';
import styled from 'styled-components';

import MediaLink from './MediaLink';

const Links = styled.div`
  > span {
    margin: 0 1.5em;
  }
`;

export default class MediaLinks extends Component {
  render() {
    return (
      <Links className="links">
        {
          this.props.links.map((link, index) => (
              <MediaLink
                link={link.link}
                iconName={link.iconName}
                key={index}
              />
            )
          )
        }
      </Links>
    );
  }
}
