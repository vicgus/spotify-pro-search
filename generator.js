var titles = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there"
titles = titles + "who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant"  
titles = titles.split(" ");
console.log("titles", titles.length);
//200 titles
var artists = ["Cari Lekebusch", "Kerri Chandler", "Fluxion", "Seb Zito","Etapp Kyle", "Michael", "Dave Chappelle", "Coop-Victor"];
//5 artists
var albums = "debitis rerum necessitatibus saepe eveniet voluptates repudiandae molestiae recusandae Itaque earum rerum tenetur sapiente delectus reiciendis voluptatibus maiores alias consequatur easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
var albums = albums.split(" ");
//47 albums

console.log("albums", albums.length);
let years = [1990, 1995, 2000, 2005];
let genres = ["Techno", "House", "Dub-Techno", "Minimal House", "Acid"];
let labels = ["Echochord", "Porslin Records", "Berg Audio","Star Dub", "Recordeep"];
let producers = ["Max Martin", "Martin Solveig", "Daniel G", "Adam A", "Sam B", "Andreas Carlson", "LRG"];

var keys = ["12A", "6A", "7B", "8B"];
var bpms = [120, 105, 100, 107];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var jsonData = [];

var artistCounter = 0;
var albumCounter = 0;

var artistInt = 0;
var albumInt = 0;
var yearInt = getRandomInt(0, 3);
var genreInt = getRandomInt(0, 4);
var labelInt = getRandomInt(0, 4);
var keyInt = getRandomInt(0, 3);
var bpmInt = getRandomInt(0, 3);
var producerInt = getRandomInt(0, 6)

titles.map(function(title, index){
    
    titleInt = index
        
    if(albumCounter == 5){
        albumCounter = 0;
        albumInt = albumInt + 1;
        
        yearInt = getRandomInt(0, 3);
        genreInt = getRandomInt(0, 4);
        labelInt = getRandomInt(0, 4);
    };
    
    if(artistCounter == 23){
        artistCounter = 0;
        artistInt = artistInt + 1;
    }    
    
    keyInt = getRandomInt(0, 3);
    bpmInt = getRandomInt(0, 3);
    producerInt = getRandomInt(0, 6)

    //artist ökas var 24e
    
    //album ökas var 6e
    //label slumpas var 6e
    //årtal slumpas var 6e
    //genre slumpas var 6e
    
    //producer kan slumpas per låt
    //key kan slumpas per låt
    //bpm kan slumpas per låt
    
    jsonData.push({
        title: titles[titleInt],
        artist: artists[artistInt],
        album: albums[albumInt],
        label: labels[labelInt],
        year: years[yearInt],
        genre: genres[genreInt],
        producer: producers[producerInt],
        key: keys[keyInt],
        bpm: bpms[bpmInt]
        
    });
    
    artistCounter = artistCounter + 1;
    albumCounter = albumCounter + 1;
    
    
    
})

var json = JSON.stringify(jsonData, null, 4);

var fs = require("fs");
fs.writeFile('data.json', json, 'utf8');