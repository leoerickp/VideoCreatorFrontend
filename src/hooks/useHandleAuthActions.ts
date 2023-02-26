import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config, vidoCreatorApiServer } from "../api/video-creator-apiserver";
import { registerAuth, removeAuth } from "../store/slices/auth/authSlice";
import { useApiHandleNotification } from "./useApiHandleNotification";
import { HOME } from '../config/config';

export const useHandleAuthActions = (mainPath: string = HOME) => {

    const { ApiErrorNotification } = useApiHandleNotification();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [connecting, setConnecting] = useState(false);

    useEffect(() => {
        dispatch(removeAuth());
    }, [connecting]);

    const authLoginSubmit = async (values: any) => {
        const { email, password } = values;
        setConnecting(true);
        try {
            const resp = await vidoCreatorApiServer
                .post(`/auth/login`, {
                    email,
                    password,
                });
            dispatch(registerAuth(resp.data));
            navigate(mainPath);
        } catch (error) {
            ApiErrorNotification(error);
            dispatch(removeAuth());
        }
        setConnecting(false);
    };

    const signUpSubmit = async (values: any) => {
        const { email, password, fullName } = values;
        setConnecting(true);
        try {
            const resp = await vidoCreatorApiServer
                .post(`/auth/sign-up`, {
                    email,
                    password,
                    fullName,
                });
            dispatch(registerAuth(resp.data));
            navigate(mainPath);
        } catch (error) {
            ApiErrorNotification(error);
            dispatch(removeAuth());
        }
        setConnecting(false);
    };

    return { authLoginSubmit, connecting, signUpSubmit }
}