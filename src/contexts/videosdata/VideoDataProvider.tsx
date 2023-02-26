import { useHandlerVideoData } from "../../hooks/useHandlerVideoData";
import { VideoDataContext } from "./VideoDataContext";
import { CreateVideo } from "../../pages/CreateVideo";
import { ValidGetVideoActions } from "../../enums/valid-get-video-actions";

export const VideoDataProvider = ({
  children,
  action = ValidGetVideoActions.published,
}: any) => {
  const {
    data,
    count,
    loading,
    setData,
    setLoading,
    setLikeVideo,
    unsetLikeVideo,
    setFollowCreator,
    unsetFollowCreator,
    setPublishedVideo,
    createNewVideo,
    updateVideo,
    setCount,
  } = useHandlerVideoData();

  return (
    <VideoDataContext.Provider
      value={{
        action,
        data,
        count,
        loading,
        setData,
        setLoading,
        setLikeVideo,
        unsetLikeVideo,
        setFollowCreator,
        unsetFollowCreator,
        setPublishedVideo,
        createNewVideo,
        updateVideo,
        setCount,
      }}
    >
      {children}
    </VideoDataContext.Provider>
  );
};
