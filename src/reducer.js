export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null, 
    // REMOVE after finished developing 
    // token: 'BQC3VR8MNUuyuUSqS9mT_QRFi_ymJxxM7jaC9iV1Nfmciz7EXfGIHY-8ruravy5Y4L8YMzVv_Ypoy0mBxHDlRz8QiVfKq5ZB96kXqOhhKRx9O6gA5fBFQ4i7KdFUgPm7mVx6yCwHtGmW4NNMk24GKLDjV220gg',
}; 

const reducer = (state, action) => {
    console.log(action); 
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user
            }; 
        case 'SET_TOKEN': 
            return {
                ...state, 
                token: action.token
            };
        case 'SET_PLAYLISTS': 
            return {
                ...state, 
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY': 
            return {
                ...state, 
                discover_weekly: action.discover_weekly,
            };
        default: 
            return state; 
    }
};

export default reducer; 