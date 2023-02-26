import { ListVideoComponent } from "../components/ListVideoComponent";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";

export const MyFavorites = () => {
  return <ListVideoComponent action={ValidGetVideoActions.favorites} />;
};
