import { CardFormVideo } from "../components/CardFormVideo";
import { VideoDataProvider } from "../contexts/videosdata/VideoDataProvider";

export const CreateVideo = () => {
  return (
    <VideoDataProvider>
      <CardFormVideo />
    </VideoDataProvider>
  );
};
