import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component{

  handleSubmit (event){
    let playerName = event.target.playerName.value;
  	event.preventDefault(); //prevents default behavior, stopping the form from refreshing the page
  	if(playerName){
  		event.target.playerName.value = '';
  		Players.insert({
  			name: playerName,
  			//score: this.props.score
        score: 0
  		});
  	}
  }

  render(){
    return (
      <div className="item" >
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
