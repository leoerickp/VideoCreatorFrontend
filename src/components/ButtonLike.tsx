import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useHandleLikeState } from "../hooks/useHandleLikeState";

export const ButtonLike = ({ isLiked, videoId }: any) => {
  const { liked, setLikeOrUnlikeVideo } = useHandleLikeState(isLiked, videoId);
  return (
    <Tooltip title={liked ? "Unlike video" : "Like video"} color={"geekblue"}>
      <Button
        shape="circle"
        icon={
          !liked ? <LikeOutlined /> : <LikeFilled style={{ color: "blue" }} />
        }
        onClick={() => setLikeOrUnlikeVideo()}
      />
    </Tooltip>
  );
};
