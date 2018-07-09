import axios from 'axios'

const TEST = 'TEST'

const initialState = {
    testing: 'nothing',
    isLoading: false
};


export function test() {
    return {
        type: TEST,
        payload: axios.get('http://localhost:3000/api/newTest/').then(response => {
            console.log(response.data, 'response')
        return response.data
    })
}
}
// Reducer

export default function reducer(state = initialState, action){
    switch(action.type) {

        case TEST + "_PENDING": 
            return Object.assign({}, state, {
                isLoading: true
            });
        case TEST + "_FULFILLED": 
            return Object.assign({}, state, {
                isLoading: false,
                testing: action.payload
            });


        default:
            return state
    }
}