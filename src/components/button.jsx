import React from 'react';
import WebFont from 'webfontloader';

function Header(){

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
    buttonStyle: {
      backgroundColor: 'blue',
      height: '50px',
      width: '100px'
    }
  };
  return(
    <div style={styles.containerStyle}>
      <Button style={styles.buttonStyle}> This </Button>
    </div>
  );
}

export default Header;
