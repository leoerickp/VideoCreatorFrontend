import { useEffect } from "react";
import { ListVideoComponent } from "../components/ListVideoComponent";
import { useAppContext } from "../contexts/appcontext/AppContext";
import { ValidGetVideoActions } from "../enums/valid-get-video-actions";

export const Home = () => {
  const { setCurrentMenuOption } = useAppContext();
  useEffect(() => {
    setCurrentMenuOption("home");
    //dispatch(getCompanies(10, 0));
  }, []);
  return <ListVideoComponent action={ValidGetVideoActions.published} />;
};
