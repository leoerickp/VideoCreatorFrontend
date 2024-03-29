import { SmileOutlined } from "@ant-design/icons";
import { Card, Result } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ButtonBackLogin } from "../components/ButtonBackLogin";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";
import { removeAuth } from "../store/slices/auth/authSlice";

export const Logout = () => {
  const { setCurrentMenuOption } = useHandleMenuClicks();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeAuth());
    setCurrentMenuOption("home");
  }, []);
  return (
    <Card title="Logout" bordered={false} style={{ width: 350 }}>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations! Bye, see you next time."
        extra={<ButtonBackLogin />}
      />
    </Card>
  );
};
