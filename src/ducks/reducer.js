import axios from 'axios'

const TEST = 'TEST'

const initialState = {
    test: 'nothing'
};


export function test(thing) {
    return {
        type: TEST,
        payload: thing
    }

}
// Reducer

export default function reducer(state = initialState, action){
    switch(action.type) {
        case TEST: 
            return Object.assign({}, state, {
                test: action.payload
            });


        default:
            return state
    }
}