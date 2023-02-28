import { headerInfo, tracks } from "../services/api";
import PlayListHeader from "./components/PlayListHeader";
import PlayListItem from "./components/PlayListItem";

const Player = () => {
    return (
        <div className="player-container">
            <PlayListHeader {...headerInfo} />
            
            {tracks.map((track) => (
                <PlayListItem { ...track } key={track.id}/>
            ))}
        </div>
    )
}

export default Player;