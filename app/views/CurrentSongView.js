import React from 'react';

class CurrentSongView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hej"
    }
}
    
  render() {
      
    return (
        <section className="middle_top">
            <img className="waveform" src="assets/img/waveform.png" />
            <section className="background"></section>
            <ul className="trackinfo-group">
                <li className="trackinfo-item">
                    <span className="attribute"> Title: </span>
                    <span className="value"> {self.state.title}</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Artist: </span>
                    <span className="value"> 2030 </span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Album: </span>
                    <span className="value"> Timeworm EP</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Label: </span>
                    <span className="value"> Black Crow Records</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Year: </span>
                    <span className="value"> 2016 </span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Genre: </span>
                    <span className="value"> Electronic</span>
                </li>
                <li className="trackinfo-item">
                    <span className="attribute"> Producer: </span>
                    <span className="value"> Nico Campanella </span>
                </li>
            </ul>
        </section>
    )
  }
};

module.exports = CurrentSongView;