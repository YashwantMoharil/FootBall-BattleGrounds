import React from 'react'
import { useState } from 'react'
import { useChatContext, Channel} from 'stream-chat-react';
import Lobby from './Lobby';

function JoinTicTacToe() {
  const [rivalName, setRivalName] = useState("");
  const [channel, setChannel] = useState(null);
  const { client } = useChatContext();
  const createChannel = async () => {
    const response = await client.queryUsers({ name: { $eq: rivalName } });

    if (response.users.length === 0) {
      alert("User not Found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
  }
  return (
    <>
    { channel ? 
      <Channel channel = {channel}>
        <Lobby channel = {channel}/>
      </Channel>
    :
    (<div className='joinTicTacToe'>
      <h4>Create Game</h4>
      <input placeholder='Enter Rival Name' onChange={(event) => { setRivalName(event.target.value) }}></input>
      <button className='joinGameBtn' onClick={createChannel}>Join Game</button>
    </div>)
    }
  </>
  )
}

export default JoinTicTacToe