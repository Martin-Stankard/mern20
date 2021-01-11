import * as api from '../api';


//Action Creators
//thunk async syntax...function returns a function.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ 
            type: 'FETCH_ALL', 
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}
//thunk async syntax...function returns a function.
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({ 
            type: 'CREATE', 
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}