import React, { useState, useEffect } from 'react';
import SongsList from '../Components/SongsList';

const SongsContainer = () => {
    const [songs, setSongs] = useState ([]);
    const [selectedSong, setSelectedSong] = useState (null);

    useEffect(() => {
        getSongs();
      }, [])

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => {
            const topTwenty = songs.feed.entry;
            const topTwentyObjects = topTwenty.map((song, index) => {
                return {artist: song["im:artist"].label,
                        title: song.title.label,
                        position: index + 1}
            })
            setSongs (topTwentyObjects)
        })


    }


    return(
        
        <SongsList songs = {songs}/>
    )

}

export default SongsContainer
