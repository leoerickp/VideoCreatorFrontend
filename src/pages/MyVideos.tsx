import { useEffect } from "react";
import { ListVideoComponent } from "../components/ListVideoComponent";
import { useAppContext } from "../contexts/appcontext/AppContext";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";

export const MyVideos = () => {
  const { setCurrentMenuOption } = useAppContext();
  useEffect(() => {
    setCurrentMenuOption("myvideos");
    //dispatch(getCompanies(10, 0));
  }, []);
  return <ListVideoComponent action={ValidGetVideoActions.own} />;
};
