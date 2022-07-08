import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => { 
    const hash = getTokenFromResponse();
    
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token)
    {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(
          {
            type: "SET_USER",
            user: user,
          }
        )
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    console.log("Token  ",_token)
    
  }, []);
  console.log("user", user);
  console.log("token", token);
  return (
    <div>
      {token ? 
      <Player spotify={spotify} />
      : <Login />
      }
      
    </div>
  );
}

export default App;
