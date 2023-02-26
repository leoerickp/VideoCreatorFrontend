import { VideoCameraAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME } from "../config/config";

export const ButtonNewVideo = () => {
  const navigate = useNavigate();
  const createVideo = () => {
    navigate(`${HOME}/create`);
  };
  return (
    <FloatButton
      type="primary"
      icon={<VideoCameraAddOutlined />}
      tooltip={<div>Create video</div>}
      onClick={() => createVideo()}
    />
  );
};
