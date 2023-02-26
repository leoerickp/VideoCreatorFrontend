import { useEffect, useState } from "react";
import { useVideoDataContext } from "../contexts/videosdata/VideoDataContext";

export const useHandleFollowState = (isFollowed: boolean, userId: string) => {
    const { setFollowCreator, unsetFollowCreator } = useVideoDataContext();
    const [followed, setFollowed] = useState(isFollowed);

    const setFollowOrUnfollowCreator = () => {
        if (!followed) {
            setFollowCreator(userId);
        } else {
            unsetFollowCreator(userId);
        }
        setFollowed(!followed);
    };
    useEffect(() => {
        setFollowed(isFollowed);
    }, [isFollowed]);
    return {
        followed, setFollowOrUnfollowCreator
    }
}