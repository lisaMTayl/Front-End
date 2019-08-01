import { axiosWithAuth } from '../utilities/axiosWithAuth';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';



export const login = (creds) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post(`auth/login`, creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('userid', res.data.id);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            return true;
        })
        .catch(err => console.log(`I can't let you do that, StarFox.`, err));
};

export const SIGNUP = 'SIGNUP';

export const signup = (newUser) => dispatch => {
    dispatch({ type: SIGNUP });
    console.log('Signing Up', newUser)
    return axiosWithAuth()
        .post(`/auth/register`, newUser)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('New User ERR: ', err)
        });
};

export const UPDATE_TOTALS_START = 'UPDATE_TOTALS_START';

export const updateTotals = (path, id, updatedCost) => dispatch => {
    console.log(updatedCost);
    dispatch({ type: UPDATE_TOTALS_START });
    axiosWithAuth()
    .put(`/${path}/${id}/`, updatedCost)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('you messed up in the put:', err);
    })
}