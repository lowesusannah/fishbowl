import React from 'react';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';

function Header(){
  WebFont.load({
    google: {
      families: ['Supermercado One', 'Lato', 'cursive'],
    }
  });

  const styles = {
    containerStyle: {
      height: '50px',
      backgroundColor: '#ecf0f1',
      fontFamily: 'Supermercado One',
      fontSize: '10px',
      color: 'grey',
      paddingLeft: '10px',
      paddingTop: '7px',
    }
  };
  return(
    <div style={styles.containerStyle}>
      <Link to="/"> <h1>Home</h1></Link>
    </div>
  );
}

export default Header;
