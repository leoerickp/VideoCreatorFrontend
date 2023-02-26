import { Space } from "antd";
import { formatDistance } from "date-fns";
import { ButtonLike } from "./ButtonLike";

export const BarDateLike = ({ item }: any) => {
  return (
    <Space
      direction="horizontal"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <p style={{ margin: "0px 0px" }}>
        Published at:{" "}
        <span>
          {formatDistance(new Date(item.updatedAt), new Date(), {
            addSuffix: true,
          })}
        </span>
      </p>
      <ButtonLike isLiked={item.likes.length > 0} videoId={item.id} />
    </Space>
  );
};
