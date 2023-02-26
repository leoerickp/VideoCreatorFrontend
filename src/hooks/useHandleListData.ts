import { useEffect, useState } from "react";
import { config, vidoCreatorApiServer } from "../api/video-creator-apiserver";
import { useVideoDataContext } from "../contexts/videosdata/VideoDataContext";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions"

const limit = 10;
const apiUrl = "/videos";
export const useHandleListData = () => {
    const { count, setCount, loading, setLoading, data, setData, action } = useVideoDataContext();

    const [offset, setOffset] = useState(0);


    const loadMoreData = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        switch (action) {
            case ValidGetVideoActions.published:
                getData();
                break;
            case ValidGetVideoActions.favorites:
                getData('/my-favorites');
                break;
            case ValidGetVideoActions.own:
                getData('/my-videos');
                break;
        }
        setLoading(false);
    };

    const getData = async (path: string = '') => {
        const params = limit > 0 ? `?limit=${limit}&offset=${offset}` : "";
        try {
            const results = await vidoCreatorApiServer.get(
                `${apiUrl}${path}${params}`,
                config()
            );
            const { count, videos } = results.data;
            setOffset(offset + limit);
            setData([...data, ...videos]);

            setCount(count);
        } catch (error) { }
    }


    useEffect(() => {
        loadMoreData();
    }, []);


    return {
        count, data, loading, loadMoreData
    }
}