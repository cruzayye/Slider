import React, { useState } from 'react';
import Styles from './Slider.css'
import kano from '../../images/kano-mortal-kombat-11-uhdpaper.com-4K-274.jpg';
import luKang from '../../images/lu_kang.jpg';
import scorpion from '../../images/scorpion-bg.jpg';


const Slider = () => {
  const [count, setCount] = useState(0);
  const sampleImage = '../../images/kano-mortal-kombat-11-uhdpaper.com-4K-274.jpg'; 
  const backgroundImgs = [
    kano,
    luKang,
    scorpion 
  ]
  const bgstyle = {
    backgroundImage: `url(${backgroundImgs[0]})`


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
