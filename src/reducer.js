export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBXXbcBKlh4y2SvsBtjFiticBtZmsJkOpR7oEQhnBDYkfIPHyEbkNtsQD9SVXRkr5FYLznzzzzFccO2R72zAkg7yEWCLNqYoDgN2nFsduxtu5wWQ0-uywPcP1BTrNI9dnJsXpU4HBjD-_WBxrZWCyNU8iaTiBtGQAz770zSi5cKzdNiuuaQQmbJilbybUvEehW6VIJXdFx-685r"
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,  
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };
        default: 
            return state;
    }

}

export default reducer;