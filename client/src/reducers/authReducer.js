import  {FETCH_USER } from '../actions/types';  // import FETCH_USER action type from type.js file 

export default function (state=null, action) {
    switch (action.type) {
        case FETCH_USER: 
            return action.payload || false;
        default:
            return state;
    }
}