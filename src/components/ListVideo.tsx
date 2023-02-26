import { List } from "antd";
import { CardVideo } from "./CardVideo";
import { VideoDataType } from "../interfaces/video-data-type.interface";

export const ListVideo = ({ data, loading }: any) => {
  return (
    <List
      dataSource={data}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      itemLayout="vertical"
      loading={loading}
      renderItem={(item: VideoDataType) => (
        <List.Item key={data.id}>
          <CardVideo item={item} />
        </List.Item>
      )}
    />
  );
};
