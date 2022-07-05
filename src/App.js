import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => { 
    const hash = getTokenFromResponse();
    
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token)
    {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }

    console.log("Token  ",_token)
    
  }, []);
  return (
    <div>
      {token ? 
      <Player />
      : <Login />
      }
      
    </div>
  );
}

export default App;
