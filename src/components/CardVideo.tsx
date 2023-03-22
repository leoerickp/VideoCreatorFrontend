import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useVideoDataContext } from "../contexts/videosdata/VideoDataContext";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";
import { DetailOwnVideoCard } from "./DetailOwnVideoCard";
import { DetailVideoCard } from "./DetailVideoCard";

export const CardVideo = ({ item }: any) => {
  const { action } = useVideoDataContext();
  return (
    <Card
      hoverable
      cover={
        <iframe
          src={item.link}
          allowFullScreen
          style={{ border: 0, borderRadius: "15px 0px" }}
        ></iframe>
      }
      style={
        action === ValidGetVideoActions.own
          ? { height: "270px" }
          : { height: "370px" }
      }
    >
      <Meta
        title={item.title}
        description={
          action === ValidGetVideoActions.own ? (
            <DetailOwnVideoCard item={item} />
          ) : (
            <DetailVideoCard item={item} />
          )
        }
      />
    </Card>
  );
};
