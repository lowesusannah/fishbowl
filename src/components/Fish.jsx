import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'Moment';

function Fish(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.location}</p>
      <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      <Link to={props.url}><p>{props.image}</p></Link>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Fish.propTypes={
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
};

export default Fish;
