import React from 'react';

class FilterView extends React.Component {
    
        sayHello(){
            console.log("hello");
        }
        
  render() {
    return (
        <ul className="filter-group"> 
            <li className="filter-item" onClick={this.sayHello} >
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK ALBUM</p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK ARTIST</p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK LABEL </p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK GENRE </p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK PRODUCER </p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK BPM </p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK KEY </p>
            </li>
            <li className="filter-item">
                <label className="filter-switch">
                    <input type="checkbox" />
                    <span className="filter-switch-slider"></span>
                </label>
                <p className="filter-description"> LOCK YEAR </p>
            </li>
        </ul>
    )
  }
}

module.exports = FilterView;