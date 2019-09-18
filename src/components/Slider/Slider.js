import React, { useState } from 'react';
import Styles from './Slider.css'
import kano from '../../images/kano-mortal-kombat-11-uhdpaper.com-4K-274.jpg';
import luKang from '../../images/lu_kang.jpg';
import scorpion from '../../images/scorpion-bg.jpg';


const Slider = () => {
  const [count, setCount] = useState(0);
  const backgroundImgs = [
    kano,
    luKang,
    scorpion 
  ]
  const bgstyle = {
    backgroundImage: `url(${backgroundImgs[count]})`
  }

  const changeColor = () => {
    count >= 2 ? setCount(0) : setCount(count+1);
    // if(count >= 2){
    //   setCount(0)
    // } else setCount(count+1)
  }

  return (
    <>
    <section className={Styles.background} style={bgstyle} id={Styles.transition}>
    </section>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default Slider;
