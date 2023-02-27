import { EditOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { HOME } from "../config/config";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const ButtonEditVideo = ({ item }: any) => {
  const { setCurrent, navigate } = useHandleMenuClicks();
  const editVideo = () => {
    navigate(`${HOME}/edit`, { state: { item } });
    setCurrent("edit");
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
