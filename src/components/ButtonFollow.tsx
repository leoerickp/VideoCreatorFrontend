import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useHandleFollowState } from "../hooks/useHandleFollowState";

export const ButtonFollow = ({ isFollowed, userId }: any) => {
  const { followed, setFollowOrUnfollowCreator } = useHandleFollowState(
    isFollowed,
    userId
  );
  return (
    <Tooltip
      title={followed ? "Unfollow creator" : "Follow creator"}
      color={"red"}
    >
      <Button
        shape="circle"
        icon={
          !followed ? (
            <HeartOutlined />
          ) : (
            <HeartFilled style={{ color: "red" }} />
          )
        }
        onClick={() => setFollowOrUnfollowCreator()}
      />
    </Tooltip>
  );
};
