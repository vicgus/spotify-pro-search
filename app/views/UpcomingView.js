import React from 'react';

class UpcomingSingleTrack extends React.Component {
    constructor(props) {
        super(props);
        //Should be moved to parent
    }
    
    clicked() {
        this.props.parent.props.dataStore.setSelectedTrackId(this.props.track.id);
    }
    
    mouseOver() {
        this.props.parent.setState({
            hoverTrack: {
                title: this.props.track.title,
                artist: this.props.track.artist
            }
        })
        
    }
    
    mouseOut(){
        this.props.parent.setState({
            hoverTrack: {
                title: "",
                artist: ""
            }
        })
        
    }
    
    render(){
        console.log("UpcomingSingleTrack rendering!");
        var src = this.props.track.albumcover;
        return (
            <img onClick={this.clicked.bind(this)} onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)} className="recommended" src={"assets/img/" + src} />

        )
    }
}


class UpcomingView extends React.Component {
    constructor(props) {
        super(props);
        
        this.props.dataStore.connect(this);
        
        this.state = {
            hoverTrack: {
                title: "",
                artist: ""
            }
        };
    }
    
    render() {
        console.log("UpcomingView rendering!");

        var upcoming = this.props.dataStore.getUpcoming();
        var self = this;
        return (
            <section>
                <section className="middle_bar">
                    <h2 className="suggestion">{this.state.hoverTrack.title} - {this.state.hoverTrack.artist}</h2>
                    <h2 className="info"> {upcoming.matches} matches / {upcoming.filtered} filtered</h2>
                </section>
                <section className="middle_bottom">
                {upcoming.tracks.map(function(track, index){
                    return (
                        <UpcomingSingleTrack parent={self} dataStore={self.props.dataStore} track={track} key={track.id}/>
                    )
                })}
                </section>
            </section>

        )
    }

};

module.exports = UpcomingView;