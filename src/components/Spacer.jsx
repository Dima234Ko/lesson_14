import React from 'react';
import '../css/Spacer.css'

const Spacer = ({ color = '#ccc', height = '1px', margin = '16px 0' }) => {

  const style = {
    backgroundColor: color,
    height: height,
    margin: margin,
  };

  return <hr className="spacer" style={style} />;
};

export default Spacer;