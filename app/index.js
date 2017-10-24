import React from 'react';
var ReactDOM = require('react-dom');

var FilterView = require("./views/FilterView.js");
var CurrentSongView = require("./views/CurrentSongView.js");

ReactDOM.render(
	(
        <FilterView />
	),
document.getElementById("filters"));

ReactDOM.render(
	(
        <CurrentSongView />
	),
document.getElementById("currentSongView"));