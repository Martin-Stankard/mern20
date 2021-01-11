// simplified notes
//const reducer = (state, action) => {
    // if(action.type==='CREATE'){
    //     return state modified by action
    // }
const posts = (posts=[], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
            break;

        case 'CREATE':
            return posts;
            break;

        default:
            return posts;
            break;
    }
}

export default posts;