import React, { Component } from 'react';
import { init } from 'ityped';

export default class ByLine extends Component {
  componentDidMount() {
    init('.tag-line', {
      strings: [this.props.byline],
      showCursor: false,
      cursorChar: ""
    })
  }

  render() {
    return (
      <p className="tag-line"></p>
    );
  }
}
