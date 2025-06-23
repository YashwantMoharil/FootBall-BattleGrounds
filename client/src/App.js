import React  from 'react';
import './App.css';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import { StreamChat } from "stream-chat"
import {Chat} from "stream-chat-react"
import Cookies from "universal-cookie"
import { useState } from 'react';
import JoinTicTacToe from './Components/JoinTicTacToe';



function App() {
  const API_KEY = process.env.API_KEY;
  const client = StreamChat.getInstance(API_KEY);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [isAuth, setIsAuth] = useState(false);

  if(token){
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("userName"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("userName"),
      hashedPassword: cookies.get("hashedPassword")
    }, token).then((user) => {
        setIsAuth(true)
    })
  }

  const logOutUser = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("userName");
    client.disconnectUser();
    setIsAuth(false);

  }

  return (
    <div>
      { isAuth ?(
        <Chat client = {client}>
          <JoinTicTacToe/>
          <button onClick={logOutUser} setIsAuth = {setIsAuth} className="logout">Log out</button>
        </Chat>
         ) : 
        <>
          <Signup setIsAuth = {setIsAuth}/>
          <Login setIsAuth = {setIsAuth}/>
        </>
      }
    </div>
  );
}

export default App;
