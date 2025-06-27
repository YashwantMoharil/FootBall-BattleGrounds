import React,{useState} from 'react'
import TicTacToe from './TicTacToe';
import Facts from './Facts';
import WaitSign from './WaitSign';


function Lobby({channel}) {
const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);

channel.on("user.watching.start", (event) => {
    setPlayersJoined(channel.state.watcher_count === 2)
})
if(!playersJoined){
    return  <>
        <WaitSign/>
        <Facts/>
    </>
}
return (
    <div>
        <TicTacToe/>
        {/* Chat */}
    </div>
)
}

export default Lobby