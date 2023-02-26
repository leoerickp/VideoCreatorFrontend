import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { vidoCreatorApiServer } from '../../../api/video-creator-apiserver';
import { registerAuth } from './authSlice';

export const login = ({ email, password }: any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await vidoCreatorApiServer
            .post(`/auth/login`, {
                email,
                password,
            })
            .then((resp) => {
                dispatch(registerAuth(resp.data));
            });
    };
};
