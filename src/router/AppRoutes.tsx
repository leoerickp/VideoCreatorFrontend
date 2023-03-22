import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Unauth403 } from "../pages/Unauth403";
import { PublicRoutes } from "./PublicRoutes";
import { VideoCreatorRoutes } from "./VideoCreatorRoutes";

export const AppRoutes = () => {
  const { isLogged } = useSelector((state: any) => state.auth);
  return (
    <Routes>
      {!isLogged ? (
        <Route path="/auth/*" element={<PublicRoutes />} />
      ) : (
        <Route path={"/*"} element={<VideoCreatorRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
