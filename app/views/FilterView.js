import React from 'react';

class FilterView extends React.Component {

    constructor(props) {
        super(props);
        this.props.dataStore.connect(this);
    }
    
    filterToggle(e){
        this.props.dataStore.toggleFilter(e.target.name);
    }
    
    render() {
        
        var filterState = this.props.dataStore.getFilters();
        
        return (
            <ul className="filter-group"> 
                <li className="filter-item" >
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"album"} checked={filterState.album} />
                        <span className="filter-switch-slider"></span>
                    </label>
                    <p className="filter-description"> LOCK ALBUM</p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"artist"} checked={filterState.artist}/>
                        <span className="filter-switch-slider"></span>
                        </label>
                    <p className="filter-description"> LOCK ARTIST</p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"label"} checked={filterState.label} />
                        <span className="filter-switch-slider"></span>
                        </label>
                        <p className="filter-description"> LOCK LABEL </p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"genre"} checked={filterState.genre} />
                            <span className="filter-switch-slider"></span>
                    </label>
                <p className="filter-description"> LOCK GENRE </p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"producer"} checked={filterState.producer}/>
                        <span className="filter-switch-slider"></span>
                    </label>
                    <p className="filter-description"> LOCK PRODUCER </p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"bpm"} checked={filterState.bpm}/>
                        <span className="filter-switch-slider"></span>
                    </label>
                    <p className="filter-description"> LOCK BPM </p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"key"} checked={filterState.key} />
                        <span className="filter-switch-slider"></span>
                    </label>
                <p className="filter-description"> LOCK KEY </p>
                </li>
                <li className="filter-item">
                    <label className="filter-switch">
                        <input type="checkbox" onChange={this.filterToggle.bind(this)} name={"year"} checked={filterState.year}/>
                        <span className="filter-switch-slider"></span>
                    </label>
                    <p className="filter-description"> LOCK YEAR </p>
                </li>
            </ul>
        )
    }
}

module.exports = FilterView;