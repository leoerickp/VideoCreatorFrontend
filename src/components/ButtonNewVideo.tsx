import { VideoCameraAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { HOME } from "../config/config";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const ButtonNewVideo = () => {
  const { setCurrentMenuOption, navigate } = useHandleMenuClicks();
  const createVideo = () => {
    navigate(`${HOME}/create`);
    setCurrentMenuOption("create");
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
