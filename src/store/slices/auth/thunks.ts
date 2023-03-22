import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { vidoCreatorApiServer } from '../../../api/video-creator-apiserver';
import { registerAuth, removeAuth, startConnection, throwError } from './authSlice';

export const login = ({ email, password }: any): any => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(startConnection());
            const { data } = await vidoCreatorApiServer
                .post(`/auth/login`, {
                    email,
                    password,
                });
            dispatch(registerAuth(data));

        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
            dispatch(removeAuth());
        }
    };
};
export const signUp = ({ email, password, fullName }: any): any => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(startConnection());
            const { data } = await vidoCreatorApiServer
                .post(`/auth/sign-up`, {
                    email,
                    password,
                    fullName
                });
            dispatch(registerAuth(data));

        } catch (error: any) {
            const { statusText, data } = error.response;
            dispatch(throwError({ statusText, statuscode: data.statuscode, message: data.message }));
            dispatch(removeAuth());
        }
    };
};
