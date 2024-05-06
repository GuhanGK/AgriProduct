import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode'

const authToken = localStorage.getItem('authToken');
let user = '';

if (authToken)
    user = jwtDecode(authToken);

const initialState = {
    userData: {},
    sessionTimeOut: false,
    authToken: authToken,
    user: user,
    // isLoggedIn: false
};

export const authUserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            return {
                ...state,
                userData: action.payload,
                authToken: action.payload.authToken,
                user: action.payload.user,
                // isLoggedIn: action.payload.isLoggedIn
            };
        },
        setSessionTimeOut: (state, action) => {
            return {
                ...state,
                sessionTimeOut: action.payload,
            };
        },
    },
});

export const { setUserData, setSessionTimeOut } = authUserSlice.actions

export const authReducer = authUserSlice.reducer;