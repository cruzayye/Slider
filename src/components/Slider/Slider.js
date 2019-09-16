import React, { useState } from 'react';
import Styles from './Slider.css'


const Slider = () => {
  const [count, setCount] = useState(0);
  const color = ['red', 'blue', 'yellow']
  const bgstyle = {
    background: color[count],
  }

  const changeColor = () => {
    console.log('button Clicked')
    if(count === 3){
      setCount(0)
    } else setCount(count + 1)
  }
  return (
    <section className={Styles.background} style={bgstyle}>
      <h2>Slider goes here</h2> <br/>
      <button onClick={changeColor}>Change Color</button>
    </section>
  );
};

export default Slider;
