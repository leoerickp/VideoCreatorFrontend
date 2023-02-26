import { createSlice } from "@reduxjs/toolkit";

interface IInitialAuthData {
    userData: any,
    isLogged: boolean,
}
export const initialAuthData = (): IInitialAuthData => {
    const itemFromLocalStorage = localStorage.getItem("userData");
    const userData = itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : undefined;
    return {
        userData,
        isLogged: !!userData,
    };
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialAuthData(),

    reducers: {
        registerAuth: (state, action) => {
            localStorage.setItem("userData", JSON.stringify(action.payload));
            state.userData = { ...action.payload };
            state.isLogged = true;
        },
        removeAuth: (state) => {
            localStorage.removeItem("userData");
            state = initialAuthData();
        },
        resetAuth: () => initialAuthData(),
    },
});

export const { registerAuth, removeAuth, resetAuth } = authSlice.actions;
