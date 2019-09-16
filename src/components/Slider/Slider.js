import React from 'react';
import Styles from './Slider.css'

const bgstyle = {
  background: 'red',
}

const Slider = () => {
  return (
    <section className={Styles.background} style={bgstyle}>
      <h2>Slider goes here</h2>
    </section>
  );
};

export default Slider;
