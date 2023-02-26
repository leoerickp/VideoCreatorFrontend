import { useState } from "react";
import { config, vidoCreatorApiServer } from "../api/video-creator-apiserver";
import { VideoDataType } from "../interfaces/video-data-type.interface";
import { useNavigate } from 'react-router-dom';
import { message } from "antd";
import { HOME } from "../config/config";

export const useHandlerVideoData = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [count, setCount] = useState(0);

    const addData = (payload: any) => {
        const newData = { ...payload, likes: [] }
        setData([newData, ...data]);
        setCount(count + 1);
    };
    const createNewVideo = async (videoData: VideoDataType) => {
        try {
            if (!videoData.published) delete videoData.published;
            if (!videoData.description) delete videoData.description;
            const { data } = await vidoCreatorApiServer.post(
                `${"/videos"}`,
                videoData,
                config()
            );
            addData(data);
            message.success('Your video has been created', 2);
            navigate(`${HOME}/myvideos`);
        } catch (error) {
            message.error('Your video has not been created', 3);
        }
    };

    const updateData = (payload: any) => {
        const { id: videoId, ...restData } = payload;
        setData(
            data.map((item) => {
                if (item.id === videoId) {
                    item = { ...item, ...restData };
                }
                return item;
            })
        );
    };
    const updateVideo = async (videoId: string, videoData: VideoDataType) => {
        try {
            const { data } = await vidoCreatorApiServer.put(
                `${"/videos"}/${videoId}`,
                videoData,
                config()
            );
            updateData(data);
            message.success('Your video has been updated', 2);
            navigate(`${HOME}/myvideos`);
        } catch (error) {
            message.error('Your video has not been updated', 3);
        }
    };



    const setPublished = (payload: any) => {
        const { videoId, published } = payload;
        setData(
            data.map((item) => {
                if (item.id === videoId) {
                    item.published = published;
                }
                return item;
            })
        );
    };

    const setPublishedVideo = async (videoId: string, published: boolean) => {
        try {
            const { data } = await vidoCreatorApiServer.put(
                `${"/videos"}/${videoId}`,
                { published },
                config()
            );
            setPublished({ videoId, published });
        } catch (error) { }
    };

    const setFollow = (payload: any) => {
        const { userId } = payload;
        setData(
            data.map((item) => {
                if (item.user.id === userId) {
                    item.user.followers.push(payload);
                }
                return item;
            })
        );
    };

    const unsetFollow = (payload: any) => {
        const { userId, followerId } = payload;
        setData(
            data.map((item) => {
                if (item.user.id === userId) {
                    item.user.followers = item.user.followers.filter(
                        (follower: any) => follower.followerId !== followerId
                    );
                }
                return item;
            })
        );
    };

    const setFollowCreator = async (userId: string) => {
        try {
            const { data } = await vidoCreatorApiServer.post(
                `${"/followers"}`,
                { userId },
                config()
            );
            setFollow(data);
        } catch (error) { }
    };

    const unsetFollowCreator = async (userId: string) => {
        try {
            const { data } = await vidoCreatorApiServer.delete(
                `${"/followers"}/${userId}`,
                config()
            );
            unsetFollow(data);
        } catch (error) { }
    };

    const setLikeToData = (payload: any) => {
        const { videoId } = payload;
        setData(
            data.map((item) => {
                if (item.id === videoId) {
                    item.likes.push(payload);
                }
                return item;
            })
        );
    };

    const setLikeVideo = async (videoId: string) => {
        try {
            const { data } = await vidoCreatorApiServer.post(
                `${"/likes"}`,
                { videoId },
                config()
            );
            setLikeToData(data);
        } catch (error) { }
    };

    const unsetLike = (payload: any) => {
        const videoId = payload;
        setData(
            data.map((item) => {
                if (item.id === videoId) {
                    item.likes = [];
                }
                return item;
            })
        );
    };

    const unsetLikeVideo = async (videoId: string) => {
        try {
            const results = await vidoCreatorApiServer.delete(
                `${"/likes"}/${videoId}`,
                config()
            );
            unsetLike(videoId);
        } catch (error) { }
    };

    return {
        data,
        loading,
        count,
        setData,
        setCount,
        setLoading,
        setLikeVideo,
        unsetLikeVideo,
        setFollowCreator,
        unsetFollowCreator,
        setPublishedVideo,
        createNewVideo,
        updateVideo
    }
}