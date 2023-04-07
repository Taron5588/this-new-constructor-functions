function Song(title, artist) {
    this.title = title
    this.artist = artist
    this.isPlaying = false
}
Song.prototype.play = function() {
    this.isPlaying = true
}
Song.prototype.stop = function() {
    this.isPlaying = false
}

function PlayList() {
    this.songs = []    
    this.currentSongIdx = 0
}
PlayList.prototype.add = function(songName) {
    this.songs.push(songName)
}
PlayList.prototype.play = function() {
    this.songs[this.currentSongIdx].play()
   return `${this.songs[this.currentSongIdx].title} started to play `
}
PlayList.prototype.stop = function() {
    this.songs[this.currentSongIdx].stop()
    return `${this.songs[this.currentSongIdx].title} stopped`
}
PlayList.prototype.next = function() {
    this.songs[this.currentSongIdx].stop()
    if(this.currentSongIdx === this.songs.length - 1) {
        this.currentSongIdx = 0
        this.songs[this.currentSongIdx].play()
        return `${this.songs[this.songs.length - 1].title} stopped, 
                ${this.songs[this.currentSongIdx].title} started to play `
    } else this.currentSongIdx +=1
        this.songs[this.currentSongIdx].play()
        return `${this.songs[this.currentSongIdx - 1].title} stopped, 
         ${this.songs[this.currentSongIdx].title} started to play `
}

let playlist = new PlayList()

let heyJude = new Song("Hey Jude", "The Beatles")
let jaded = new Song("Jaded", "Aerosmith")

playlist.add(heyJude)
playlist.add(jaded) 

console.log(playlist)
console.log(playlist.play())
console.log(playlist)
console.log(playlist.next())
console.log(playlist)
console.log(playlist.next())
console.log(playlist)
console.log(playlist.stop())
console.log(playlist)