import React from 'react';

var dataStore = require("../dataStore.js");


var FilterView = require("./FilterView.js");
var CurrentSongView = require("./CurrentSongView.js");
var UpcomingView = require("./UpcomingView.js");


class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcoming: dataStore.getUpcoming(),
            selectedTrack: dataStore.getSelectedTrack()
        }
    }

  render() {

    return (
        <section>
            <section className="container_left">
                <ul className="menu-group">
                    <li className="menu-group-item">Browse</li>
                    <li className="menu-group-item active">Pro-Radio</li>
                </ul>
                <ul className="menu-group">
                    YOUR LIBRARY
                    <li className="menu-group-item">Recently Played</li>
                    <li className="menu-group-item">Songs</li>
                </ul>
                <ul className="menu-group">
                    PLAYLISTS
                    <li className="menu-group-item">Städa</li>
                    <li className="menu-group-item">Tänka</li>
                </ul>
            </section>

            <section className="container_middle" id="currentSongView">
                <CurrentSongView dataStore={dataStore}/>
                <UpcomingView dataStore={dataStore}/>
            </section>

            <section className="container_right">
                <h3 className="right_title"> Filters </h3>
                <FilterView dataStore={dataStore} />
            </section>

            <section className="container_bottom">
            </section>
        </section>

    )
  }
  
  renderPicture
};

module.exports = MainView;