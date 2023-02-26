import { useAppContext } from "../contexts/appcontext/AppContext";

export const useApiHandleNotification = () => {
    const { errorNotification } = useAppContext();
    const ApiErrorNotification = (error: any) => {
        errorNotification(
            `Login error: ${error.response.statusText}`,
            `Statuscode: ${error.response.data.statuscode} - message: ${error.response.data.message}`
        );
    }
    return { ApiErrorNotification }
}