import React from 'react';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';
import hero from '../assets/images/hero.jpg';

function Home(){
  WebFont.load({
    google: {
      families: ['Supermercado One', 'Lato', 'cursive'],
    }
  });

  const styles = {
    containerStyle: {
      height: '600px',
      backgroundColor: '#ecf0f1',
      paddingTop: '50px',
      textAlign: 'center',
      fontFamily: 'Supermercado One',
      fontSize: '60px',
      backgroundImage: `url(${hero})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      color: 'white',
    },
    bodyStyle:{
      paddingTop: '500px',
      fontFamily: 'Lato',
      fontSize: '20px',
      color: 'white',
    }
  };

  return(
    <div style={styles.containerStyle}>
      <h1>Fishtank</h1>
     <Link style={styles.bodyStyle} to="/choosefish">Choose a fish</Link>
    </div>
  );
}

export default Home;
