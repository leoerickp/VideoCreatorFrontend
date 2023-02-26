import { LikeOutlined } from "@ant-design/icons";
import { Button, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { BarCreator } from "./BarCreator";
import { BarDateLike } from "./BarDateLike";

export const DetailVideoCard = ({ item }: any) => {
  return (
    <Space direction="vertical">
      <BarCreator item={item} />
      <Paragraph
        ellipsis={{ rows: 2, expandable: false, symbol: "more" }}
        style={{ margin: 0 }}
      >
        <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
        {item.description}
      </Paragraph>
      <BarDateLike item={item} />
    </Space>
  );
};
