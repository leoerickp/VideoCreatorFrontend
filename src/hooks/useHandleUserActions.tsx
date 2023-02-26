import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config, vidoCreatorApiServer } from "../api/video-creator-apiserver";
import { registerAuth } from "../store/slices/auth/authSlice";
import { HOME } from "../config/config";

export const useHandleUserActions = () => {
  const { userData } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateUser = async (id: number, values: any) => {
    try {
      const { data } = await vidoCreatorApiServer.put(
        `/users/${id}`,
        values,
        config()
      );
      dispatch(registerAuth({ ...userData, user: { ...data } }));
      message.success("Your profile information has been saved", 2);
    } catch (error) {
      message.error("Your profile information has not been saved", 3);
    }
  };
  return { userData, updateUser };
};
