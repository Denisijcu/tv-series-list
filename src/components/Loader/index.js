import React from 'react';
import loaderSrc from '../../assets/Loader.gif';
const Loader = props =>(
    <div>
      <img 
      style={{width: 75}}
      src = {loaderSrc} alt="Loading..." />
    </div>
);

export default Loader;