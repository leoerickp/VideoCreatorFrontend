import { createSlice } from "@reduxjs/toolkit";
import { IInitialAuthData } from "../../../interfaces/InitialAuthData";


export const initialAuthData = (): IInitialAuthData => {
    const itemFromLocalStorage = localStorage.getItem("userData");
    const userData = itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : undefined;
    return {
        userData,
        isLogged: !!userData,
        isConnecting: false,
        errorMessage: null,
        successMessage: '',
    };
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialAuthData(),

    reducers: {
        startConnection: (state) => {
            state.isConnecting = true;
            state.successMessage = '';
        },
        registerAuth: (state, action) => {
            localStorage.setItem("userData", JSON.stringify(action.payload));
            state.userData = { ...action.payload };
            state.isLogged = true;
            state.isConnecting = false;
            state.errorMessage = null;
        },
        removeAuth: (state) => {
            localStorage.removeItem("userData");
            state.isConnecting = false;
            state.isLogged = false;
            state.userData = null;
        },
        resetAuth: () => initialAuthData(),
        throwError: (state, action) => {
            state.errorMessage = action.payload;
        },
        eraseErrorMessage: (state) => {
            state.errorMessage = null;
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        }
    },
});

export const {
    eraseErrorMessage,
    registerAuth,
    removeAuth,
    resetAuth,
    startConnection,
    throwError,
    setSuccessMessage
} = authSlice.actions;
