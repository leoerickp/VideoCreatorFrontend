import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { HOME } from "../config/config";
import { Unauth403 } from "../pages/Unauth403";
import { PublicRoutes } from "./PublicRoutes";
import { VideoCreatorRoutes } from "./VideoCreatorRoutes";

export const AppRoutes = () => {
  const { isLogged } = useSelector((state: any) => state.auth);
  return (
    <Routes>
      <Route
        path={`${HOME}/*`}
        element={isLogged ? <VideoCreatorRoutes /> : <Unauth403 />}
      />
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
};
