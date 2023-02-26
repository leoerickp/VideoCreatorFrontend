import { useEffect, useState } from "react";
import { useVideoDataContext } from "../contexts/videosdata/VideoDataContext";

export const useHandleLikeState = (isLiked: boolean, videoId: string) => {
    const { setLikeVideo, unsetLikeVideo } = useVideoDataContext();
    const [liked, setLiked] = useState<boolean>(isLiked);

    const setLikeOrUnlikeVideo = () => {
        if (!liked) {
            setLikeVideo(videoId);
        } else {
            unsetLikeVideo(videoId);
        }
        setLiked(!liked);
    };
    useEffect(() => {
        setLiked(isLiked);
    }, [isLiked]);

    return {
        liked, setLikeOrUnlikeVideo
    }
}