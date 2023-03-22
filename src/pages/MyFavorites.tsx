import { useEffect } from "react";
import { ListVideoComponent } from "../components/ListVideoComponent";
import { useAppContext } from "../contexts/appcontext/AppContext";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";

export const MyFavorites = () => {
  const { setCurrentMenuOption } = useAppContext();
  useEffect(() => {
    setCurrentMenuOption("favorites");
    //dispatch(getCompanies(10, 0));
  }, []);
  return <ListVideoComponent action={ValidGetVideoActions.favorites} />;
};
