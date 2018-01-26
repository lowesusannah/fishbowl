import React from 'react';
import betafish from '../assets/images/betafish.png';
import starfish from '../assets/images/starfish.png';
import Fish from './Fish';


function handleAlgae(event) {
  props.onNewAlgaeCreation({timeOpen: new Moment()});
}

var masterChooseFish = [
  {
    name: 'Bettie',
    location: 'Pacific Ocean',
    image:<img src={betafish}/>,
    url: '/bettie'
  },
  {
    name: 'Star',
    location: 'Portland, OR',
    image:<img src={starfish}/>,
    url: '/star'
  }
];

function ChooseFish(){
const styles = {
  buttonStyle: {
    backgroundColor: 'blue',
    height: '100px',
    width: '100px'
  }
};
  return (
    <div>
      <hr/>
      {masterChooseFish.map((fish, index) =>
        <Fish
          name={fish.name}
          location={fish.location}
          image={fish.image}
          url={fish.url}
          timeOpen={fish.timeOpen}
          key={index}/>
      )}
      <button style={styles.buttonStyle}>This is a button</button>
    </div>
  );
}

export default ChooseFish;
