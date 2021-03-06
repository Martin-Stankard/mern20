import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  DISLIKE
} from "../constants/actionTypes";

// simplified notes
//const reducer = (state, action) => {
// if(action.type==='CREATE'){
//     return state modified by action
// }
const posts = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    case UPDATE:
    case LIKE:
    case DISLIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};

export default posts;
