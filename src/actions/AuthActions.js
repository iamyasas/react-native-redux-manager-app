import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASS_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER 
} from './types';

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = (password) => {
    return {
        type: PASS_CHANGED,
        payload: password
    };
};

export const loginUser = ({ email, password }) => {
    console.log(email);
    console.log(password);

    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => loginSuccess(dispatch, user))
                    .catch(() => loginFail(dispatch));
            });
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};
