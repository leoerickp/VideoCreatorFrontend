import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import { FormProfile } from "../components/FormProfile";
import { useAppContext } from "../contexts/appcontext/AppContext";

export const Profile = () => {
  const { setCurrentMenuOption } = useAppContext();
  useEffect(() => {
    setCurrentMenuOption("profile");
  }, []);
  return (
    <Space
      direction="vertical"
      style={{ width: "100%" }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <Title level={3}>Profile</Title>
      <FormProfile />
    </Space>
  );
};
