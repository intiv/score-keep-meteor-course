/*Meteor/React imports*/
import React from 'react';

/*React components*/
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends React.Component{
  render() {
    return (
      <div id="AppRoot">
        <TitleBar title={this.props.title} subtitle="Created by Inti"/>
        <div className="wrapper">
				      <PlayerList players={this.props.players}/>
				    <AddPlayer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
}
