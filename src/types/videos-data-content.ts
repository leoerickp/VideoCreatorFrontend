import { ValidGetVideoActions } from '../enums/valid-get-video-actions';
export type VideoDataContent = {
    action: ValidGetVideoActions;
    count: number;
    data: any[];
    setData: any;
    setCount: any;
    loading: boolean;
    setLoading: any;
    setLikeVideo: any;
    unsetLikeVideo: any;
    setFollowCreator: any;
    unsetFollowCreator: any;
    setPublishedVideo: any;
    createNewVideo: any;
    updateVideo: any;
};