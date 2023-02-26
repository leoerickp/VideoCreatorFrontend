import { ListVideoComponent } from "../components/ListVideoComponent";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";

export const MyVideos = () => {
  return <ListVideoComponent action={ValidGetVideoActions.own} />;
};
