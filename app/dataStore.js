var data  = require("./data.js");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


module.exports = {
    
    selectedTrackId: 0,
    selectedTrack: data[50],
    
    filters: {
        album: false,
        artist: true,
        label: false,
        genre: false,
        producer: false,
        bpm: false,
        key: false,
        year: false
    },
    
    elements: [],
    
    getUpcoming(){
        
        //get the current track (to compare against)
        var currentTrack = this.selectedTrack;
        
        //Parse out which filters are activated
        var self = this;
        var activeFilters = [];
        Object.keys(this.filters).map(function(key, index) {
            if(self.filters[key] === true){
                activeFilters.push(key);
            } else {
                return 
            }
        })
        
        //Compare the tracks against the current track if a filter is active 
        var filteredTracks = data.filter(function(track){
            if(track.id === currentTrack.id){
                return false
            }
            
            var testAgainstActiveFilters = activeFilters.map(function(filter){
                if( track[filter] === currentTrack[filter]){
                    return true
                } else {
                    return false
                }
            });
            if(testAgainstActiveFilters.includes(false)){
                return false
            } else {
                return true
            }
        });
        console.log(filteredTracks);
        var matches = filteredTracks.length;
        var filtered = data.length - matches;
        var tracks = filteredTracks.slice(0, 7);
        return {
            tracks, 
            matches, 
            filtered
        }
    },
    
    toggleFilter(filter){
        this.filters[filter] = !this.filters[filter];
        this.forceRenders();
    },
    
    getFilters() {
        return this.filters
    },
    
    setSelectedTrackId(id) {
        this.selectedTrack = data[id];
        this.forceRenders();
    },
    getSelectedTrack() {
        return this.selectedTrack;
    },
    
    connect(element){
        this.elements.push(element);
    },
    
    applyFilters(filters){
        
    },
    
    forceRenders(){
        this.elements.map(function(element){
            console.log("Should render!");
            element.forceUpdate();
        })
    }
}