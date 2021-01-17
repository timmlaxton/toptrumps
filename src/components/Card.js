import React, {Component} from 'react';
import Alisson from '../images/Liverpool/Alisson.jpg'
import './Card.css'




class Card extends Component {
  render () {
    return <div className="Card">
      <h1>{this.props.name}</h1>
      <img src={Alisson} alt='Alisson'/>

      
      <div>Type: <strong>{this.props.type} </strong></div>
      <div>Skills: <strong>{this.props.skills}</strong></div>
      </div>
  }
}

export default Card