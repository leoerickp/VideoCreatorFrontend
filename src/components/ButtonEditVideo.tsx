import { EditOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME } from "../config/config";

export const ButtonEditVideo = ({ item }: any) => {
  const navigate = useNavigate();
  const editVideo = () => {
    navigate(`${HOME}/edit`, { state: { item } });
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
