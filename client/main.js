/*React/Meteor imports*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

/*Mongo collections*/
import {Players, calculatePositions} from './../imports/api/players';

/*Components*/
import App from './../imports/ui/App';

// Tracker.autorun(()=>{
// 	console.log('Players list: ', Players.find().fetch());
// });

Meteor.startup( () => {
	Tracker.autorun(() => {
		let players = Players.find({}, {sort: {score: -1}}).fetch();
		let rankings = calculatePositions(players);
		let title = 'Score Keep';
		ReactDOM.render(<App title={title} players={rankings}/>, document.getElementById('app'));
	});

});
