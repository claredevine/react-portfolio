import styles from './_Body.scss';
import React from 'react';

let { PropTypes } = React;

export default class Hero extends React.Component {

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.hero}>
          <img src="components/Body/clareDevine.jpg" className={styles.photo}/>
          <h1>Clare Devine</h1>
          <h3>Software Developer</h3>
        </div>
      </div>
    );
  }
}
