import React, { Component } from 'react';
import MediaLink from './MediaLink';

export default class MediaLinks extends Component {
  render() {
    return (
      <div className="links">
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
      </div>
    );
  }
}
