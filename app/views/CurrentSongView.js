import React from 'react';

class CurrentSongView extends React.Component {
    constructor(props) {
        super(props);
        
        this.props.dataStore.connect(this);
    }
    
  render() {
      
      var currentTrack = this.props.dataStore.getSelectedTrack();
      
        var divStyle = {
            backgroundImage: 'url(assets/img/' + currentTrack.albumcover + ')'
        };

    return (
        <section className="middle_top">
            <img className="waveform" src="assets/img/waveform.png" />
            <section className="background" style={divStyle} ></section>
            
            <ul className="trackinfo-group">
                <h3> CURRENT TRACK </h3>
                <li className="trackinfo-item">
                    <span className="attribute"> Title: </span>
                    <span className="value"> {currentTrack.title}</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Artist: </span>
                    <span className="value"> {currentTrack.artist} </span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Album: </span>
                    <span className="value"> {currentTrack.album}</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Label: </span>
                    <span className="value"> {currentTrack.label}</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Year: </span>
                    <span className="value">{currentTrack.year} </span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Genre: </span>
                    <span className="value"> {currentTrack.genre}</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Producer: </span>
                    <span className="value"> {currentTrack.producer} </span>
                </li>
            </ul>
        </section>
    )
  }
};

module.exports = CurrentSongView;