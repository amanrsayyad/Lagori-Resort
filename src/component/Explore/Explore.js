import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <div className='explore'>
      <div className='explore_container'>
        <div className='explore_bg'></div>
        <div className='explore_card'>
          <h2>A Nature paradise</h2>
          <h2>you can call</h2>
          <h2>home</h2>
          <div className="button1">
            <a href="#">Explore <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
