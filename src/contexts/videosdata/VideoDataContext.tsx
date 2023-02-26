import { createContext, useContext } from "react";
import { AppContent } from "../../types/app-content";
import { VideoDataContent } from "../../types/videos-data-content";
import { ValidGetVideoActions } from "../../enums/valid-get-video-actions";

export const VideoDataContext: React.Context<VideoDataContent> =
  createContext<VideoDataContent>({
    action: ValidGetVideoActions.published,
    data: [],
    count: 0,
    setData: undefined,
    loading: false,
    setLoading: undefined,
    setLikeVideo: undefined,
    unsetLikeVideo: undefined,
    setFollowCreator: undefined,
    unsetFollowCreator: undefined,
    setPublishedVideo: undefined,
    createNewVideo: undefined,
    updateVideo: undefined,
    setCount: undefined,
  });

export const useVideoDataContext = () => useContext(VideoDataContext);
