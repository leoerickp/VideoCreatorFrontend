import { VideoDataProvider } from "../contexts/videosdata/VideoDataProvider";
import { ButtonNewVideo } from "./ButtonNewVideo";
import { InfiniteScrollVideo } from "./InfiniteScrollVideo";

export const ListVideoComponent = ({ action }: any) => {
  return (
    <VideoDataProvider action={action}>
      <ButtonNewVideo />
      <div
        id="scrollableDiv"
        style={{
          height: "100%",
          width: "100%",
          overflow: "auto",
          padding: "0% 1%",
        }}
      >
        <InfiniteScrollVideo />
      </div>
    </VideoDataProvider>
  );
};
