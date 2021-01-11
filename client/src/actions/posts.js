import * as api from '../api';


//Action Creators
//thunk async syntax...function returns a function.
const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ 
            type: 'FETCH_ALL', 
            payload: data
        });
    } catch (error) {
        
    
    }
}

export default getPosts;