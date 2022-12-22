import React from 'react';
import Song from './Song';

const SongsList = ({songs}) => {
    const songItems = songs.map((song, index) => {
        return <Song song= {song}/>
    })


return (

    <ul>
    {songItems}
    </ul>
    
)}

export default SongsList