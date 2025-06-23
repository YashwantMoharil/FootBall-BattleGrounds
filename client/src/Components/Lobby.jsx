import React,{useState} from 'react'
import TicTacToe from './TicTacToe';

function Lobby({channel}) {
const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);

channel.on("user.watching.start", (event) => {
    setPlayersJoined(channel.state.watcher_count === 2)
})
if(!playersJoined){
    return  <div>Waiting for players to join</div>
}
return (
    <div>
        <TicTacToe/>
        {/* Chat */}
    </div>
)
}

export default Lobby