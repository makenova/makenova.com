import React, { Component } from 'react';
import { init } from 'ityped';
import styled from 'styled-components';

import MediaLinks from './components/MediaLinks';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Name = styled.p`
  font-size: 4em;
  margin: 30px 0 0;
`;

const ByLine = styled.p`
  font-size: 1em;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        link: 'https://github.com/makenova',
        iconName: 'ion-social-github'
      },{
        link: 'https://twitter.com/make_nova',
        iconName: 'ion-social-twitter'
      },{
        link: 'https://www.linkedin.com/in/mayiawo-aken-ova-15461a52',
        iconName: 'ion-social-linkedin'
      }
    ];

    this.name = `Mayiawo Aken'Ova`;
    this.byline = `I'm a web developer based in Oklahoma City, OK`;
  }

  componentDidMount() {
    init('.tag-line', {
      strings: [this.byline],
      showCursor: false,
      cursorChar: ''
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Name>{this.name}</Name>
          <ByLine className="tag-line"></ByLine>
          <MediaLinks links={this.links}/>
        </Content>
      </Container>
    );
  }
}
