
// library prototype 
function Library (name, creator){
    this._name = name;
    this._creator = creator;
    this._playlists = [];
    this.addPlaylist = function(playlist){
        return this._playlists.push(playlist);
    }
}


// palylist prototype 
function Playlist (name){
    this._name = name;
    this._tracks = [];
    this.addTrack = function(track){
        return this._tracks.push(track);
    }
}
Playlist.prototype.overallRating = function(){
    let tracks = this._tracks;
    let totalRating = 0;
    for (let track of tracks){
        totalRating += Number(track._rating);
    }
    return (totalRating/tracks.length);  
}
    
Playlist.prototype.totalDuration = function(){
    let tracks = this._tracks;
    let totalDuration = 0;
    for (let track of tracks){
        totalDuration += Number(track._duration);
    }
    return totalDuration;
}
 


// tracks prototype 
function Track (title, rating, duration){
    this._title = title;
    this._rating = rating;
    this._duration = duration;
}


// create instances

let lib1 = new Library ('lib1', 'Jessica');
let lib2 = new Library ('lib2', 'Liu');
let pl1 = new Playlist ('pl1');
let pl2 = new Playlist ('pl2');
let pl3 = new Playlist ('pl3');
let pl4 = new Playlist ('pl4');
let pl5 = new Playlist ('pl5');
let tk1 = new Track ('tk1', 5, 400);
let tk2 = new Track ('tk2', 4, 300);
let tk3 = new Track ('tk3', 5, 400);
let tk4 = new Track ('tk4', 4, 300);
let tk5 = new Track ('tk5', 5, 400);
let tk6 = new Track ('tk6', 4, 300);
let tk7 = new Track ('tk7', 5, 400);
let tk8 = new Track ('tk8', 4, 300);
lib1.addPlaylist(pl1);
lib1.addPlaylist(pl2);
lib1.addPlaylist(pl3);
lib2.addPlaylist(pl4);
lib2.addPlaylist(pl5);
pl1.addTrack(tk1);
pl2.addTrack(tk2);
pl3.addTrack(tk3);
pl4.addTrack(tk4);
pl5.addTrack(tk5);
pl1.addTrack(tk6);
pl2.addTrack(tk7);
pl3.addTrack(tk8);
console.log(lib1)
console.log(lib2)
console.log(pl1)
console.log(pl2)
console.log(pl3)
console.log(tk1)
console.log(tk2)
console.log('total duration for playlist 1:', pl1.totalDuration())
console.log('average rating for playlist 2:', pl2.overallRating())