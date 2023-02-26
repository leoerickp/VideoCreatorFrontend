import { EyeFilled, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import { useVideoDataContext } from "../contexts/videosdata/VideoDataContext";

export const ButtonPublished = ({ item }: any) => {
  const { setPublishedVideo } = useVideoDataContext();
  const [published, setPublished] = useState(item.published);
  const publishVideo = () => {
    setPublishedVideo(item.id, !published);
    setPublished(!published);
  };
  return (
    <Tooltip
      title={published ? "Unpublish video" : "Publish video"}
      color={"volcano"}
    >
      <Button
        shape="circle"
        icon={
          published ? (
            <EyeFilled style={{ color: "blue" }} />
          ) : (
            <EyeInvisibleOutlined style={{ color: "rgba(0,0,0,0.4)" }} />
          )
        }
        onClick={() => publishVideo()}
      />
    </Tooltip>
  );
};
