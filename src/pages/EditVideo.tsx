import { useLocation } from "react-router-dom";
import { CardFormVideo } from "../components/CardFormVideo";
import { VideoDataProvider } from "../contexts/videosdata/VideoDataProvider";
import { Unauth403 } from "./Unauth403";

export const EditVideo = () => {
  const location = useLocation();
  try {
    const { item } = location.state;
    return (
      <VideoDataProvider>
        <CardFormVideo initialValues={item} />
      </VideoDataProvider>
    );
  } catch (error) {
    return <Unauth403 />;
  }
};
