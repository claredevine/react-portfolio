import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="padding">
        <h2 className="heading">Experience</h2>
        <p className="pFontSize">I currently work at a large media corporation, specialising in online help and broadband diagnostics.</p>
        <p className="pFontSize">I have experience working with:</p>
        <ul className="pFontSize">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>ES6</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <p className="pFontSize">As well as build tools such as GitHub, Circle CI, Gulp, Grunt and Babel.</p>
        <p className="pFontSize">Whilst in my job I have gained experience in different areas, for example, JavaScript and Ruby app migrations, public speaking and becoming an open source contributor.</p>
      </div>
    );
  }
}

export default App;
