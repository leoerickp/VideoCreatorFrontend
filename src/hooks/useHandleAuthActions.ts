import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config, vidoCreatorApiServer } from "../api/video-creator-apiserver";
import { registerAuth, removeAuth } from "../store/slices/auth/authSlice";
import { useApiHandleNotification } from "./useApiHandleNotification";
import { HOME, initialPath } from '../config/config';
import { useHandleMenuClicks } from "./useHandleMenuClicks";

export const useHandleAuthActions = (mainPath: string = HOME) => {
    const { setCurrent, navigate } = useHandleMenuClicks();
    const { ApiErrorNotification } = useApiHandleNotification();
    const dispatch = useDispatch();

    const [connecting, setConnecting] = useState(false);

    useEffect(() => {
        dispatch(removeAuth());
    }, [connecting]);

    const authLoginSubmit = async (values: any) => {
        const { email, password } = values;
        setConnecting(true);
        try {
            const { data } = await vidoCreatorApiServer
                .post(`/auth/login`, {
                    email,
                    password,
                });
            dispatch(registerAuth(data));
            navigate(mainPath);
            setCurrent(initialPath);
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
            const { data } = await vidoCreatorApiServer
                .post(`/auth/sign-up`, {
                    email,
                    password,
                    fullName,
                });
            dispatch(registerAuth(data));
            navigate(mainPath);
            setCurrent(initialPath);
        } catch (error) {
            ApiErrorNotification(error);
            dispatch(removeAuth());
        }
        setConnecting(false);
    };

    return { authLoginSubmit, connecting, signUpSubmit }
}