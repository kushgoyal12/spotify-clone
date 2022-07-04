// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint =
    "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/"

const clientId = "a1be5987b696466b90a00dd39dd9f2da";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;