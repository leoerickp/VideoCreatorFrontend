import { Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useSelector } from "react-redux";
import { ButtonFollow } from "./ButtonFollow";

export const BarCreator = ({ item }: any) => {
  const { userData } = useSelector((state: any) => state.auth);
  const { user } = item;
  return (
    <Space style={{ display: "flex", justifyContent: "space-between" }}>
      <p style={{ margin: "0px 0px" }}>Published by: </p>
      <Paragraph
        ellipsis={{ rows: 2, expandable: false }}
        style={{ margin: "1px 0px" }}
      >
        {item.user.fullName}
      </Paragraph>
      <ButtonFollow
        isFollowed={user.followers.find(
          (follower: any) => follower.followerId === userData.user.id
        )}
        userId={item.userId}
      />
    </Space>
  );
};
