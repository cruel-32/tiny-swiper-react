import React, { useState, } from 'react';
import img1 from 'images/1.png';
import img2 from 'images/2.png';
import img3 from 'images/3.png';

import { TinySwiper, } from './tiny-swiper-react'

const App = ()=>{
  const [ items ] = useState([
    <img src={img1} className="App-logo" alt="logo" />,
    <img src={img2} className="App-logo" alt="logo" />,
    <img src={img3} className="App-logo" alt="logo" />,
    <div>
      <h1>jsx</h1>
      <p>
        jsx로 만든 마지막 슬라이드입니다.
        jsx로 만든 마지막 슬라이드입니다.
        jsx로 만든 마지막 슬라이드입니다.
        jsx로 만든 마지막 슬라이드입니다.
      </p>
    </div>
  ])


  return (
    <div className="App">
      <div style={{width:'300px', background:'#333'}} >

        <TinySwiper
          items={items}
          useIndicator={true}
          useDirector={true}
          indicatorClass={"override"}
          directorLeftClass={"override"}
          directorRightClass={"override"}
        >
        </TinySwiper>

      </div>

    </div>
  );
}

export default App;
