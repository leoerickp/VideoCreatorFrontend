import { EditOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { HOME } from "../config/config";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const ButtonEditVideo = ({ item }: any) => {
  const { setCurrentMenuOption, navigate } = useHandleMenuClicks();
  const editVideo = () => {
    navigate(`${HOME}/edit`, { state: { item } });
    setCurrentMenuOption("edit");
  };
  return (
    <Tooltip title="Edit video" color={"purple"}>
      <Button
        shape="circle"
        onClick={() => editVideo()}
        icon={<EditOutlined />}
      />
    </Tooltip>
  );
};
