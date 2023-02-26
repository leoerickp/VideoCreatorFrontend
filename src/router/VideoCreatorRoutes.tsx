import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import { FooterBar } from "../layouts/FooterBar";
import { HeaderBar } from "../layouts/HeaderBar";
import { Home } from "../pages/Home";
import { MyFavorites } from "../pages/MyFavorites";
import { MyVideos } from "../pages/MyVideos";
import { Profile } from "../pages/Profile";
import { CreateVideo } from "../pages/CreateVideo";
import { Error404 } from "../pages/Error404";
import { EditVideo } from "../pages/EditVideo";
export const VideoCreatorRoutes = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <HeaderBar />
      <Layout style={{ padding: "0% 5%", overflow: "auto" }}>
        <Content
          style={{
            margin: "10px 10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<MyFavorites />} />
            <Route path="/myvideos" element={<MyVideos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreateVideo />} />
            <Route path="/edit" element={<EditVideo />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Content>
      </Layout>
      <FooterBar />
    </Layout>
  );
};
