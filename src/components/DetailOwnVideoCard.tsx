import { Space } from "antd";
import { formatDistance } from "date-fns";
import { ButtonEditVideo } from "./ButtonEditVideo";
import { ButtonPublished } from "./ButtonPublished";

export const DetailOwnVideoCard = ({ item }: any) => {
  return (
    <Space style={{ width: "100%", display: "flex", justifyContent: "end" }}>
      <Space>
        <p style={{ margin: "0px 0px" }}>
          Updated at:{" "}
          <span>
            {formatDistance(new Date(item.updatedAt), new Date(), {
              addSuffix: true,
            })}
          </span>
        </p>
        <ButtonEditVideo item={item} />
        <ButtonPublished item={item} />
      </Space>
      ,
    </Space>
  );
};
