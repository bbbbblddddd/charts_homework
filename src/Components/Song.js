

const Song = ({song}) => {

    return (
        <li classname = "song">
            The Chart Position of {song.position} by {song.artist} is {song.title}
        </li>
    )
}

export default Song;
