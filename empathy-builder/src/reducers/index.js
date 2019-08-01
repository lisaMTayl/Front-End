import {
    LOGIN_START,
    LOGIN_SUCCESS,
    SIGNUP,
    UPDATE_TOTALS_START
} from '../actions';

//DUMMY DATA used to explain Store and action stuff to teammates

const initialState = {
    userId: '',
    loggedIn: false,
    isLoading: false,
    error: '',
    favoriteColor: '',
    weather: '',
    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                isLoading: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                userId: action.payload.id,
                loggedIn: true,
                isLoading: false,
                error: ''
            }
        case SIGNUP:
            return{
                ...state,
                error: '',
                loggingIn: false,
            }
        case UPDATE_TOTALS_START:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        default:
        return state;
    }
};

export default reducer;