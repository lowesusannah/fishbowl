import React from 'react';
import { Link } from 'react-router-dom';
import beta from '../assets/images/betafish.png';
import background from '../assets/images/background.jpg'

function Bettie(){

  const styles = {
    containerStyle: {
      height: '100vh',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'black',
      backgroundPosition: 'center',
    },
    fishStyle:{
      height: '600px',
      backgroundImage: `url(${beta})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }
  };

  return(
    <div style={styles.containerStyle}>
      <div style={styles.fishStyle}></div>
    </div>
  );
}

export default Bettie;
