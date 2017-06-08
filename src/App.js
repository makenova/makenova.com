import React, { Component } from 'react';
import './App.css';

import Name from './components/Name';
import ByLine from './components/ByLine';
import MediaLinks from './components/MediaLinks';

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
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Name name="Mayiawo Aken'Ova"/>
          <ByLine byline="I'm a web developer based in Oklahoma City, OK"/>
          <MediaLinks links={this.links}/>
        </div>
      </div>
    );
  }
}
