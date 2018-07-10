import axios from 'axios'

const LOGIN_INFO = 'LOGIN_INFO'
const GET_USER = 'GET_USER'

const initialState = {
    username: '',
    password: '',
    isLoading: false
};


export function loginInfo(name, pass) {
    return {
        type: LOGIN_INFO,
        payload: {name, pass}
    }
}

export function getUser(name, pass) {
    return {
        type: GET_USER,
        payload: axios.get(`http://localhost:3000/api/getUser/${name}/${pass}`).then( response => {
            console.log(response.data, 'response')
            if(!response.data[0]){
                return false
            }
            else
                return response.data[0]
        })
    }
}

// Reducer

export default function reducer(state = initialState, action){
    switch(action.type) {

        case LOGIN_INFO: 
            return Object.assign({}, state, {
                username: action.payload.name,
                password: action.payload.pass
            });
        
        case GET_USER:
            return Object.assign({}, state, {
                userInfo: action.payload
            })

        default:
            return state
    }
}