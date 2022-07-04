import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token)
    {
      setToken(_token);
    }
    console.log("Token  ",_token)
    
  }, []);
  return (
    <div>
      {token ? (<h1>I have the token</h1>)
      : <Login />
      }
      
    </div>
  );
}

export default App;
