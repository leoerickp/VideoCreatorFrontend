import { ListVideoComponent } from "../components/ListVideoComponent";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";

export const Home = () => {
  return <ListVideoComponent action={ValidGetVideoActions.published} />;
};
