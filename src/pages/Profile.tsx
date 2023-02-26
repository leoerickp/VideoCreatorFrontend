import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FormProfile } from "../components/FormProfile";

export const Profile = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Title level={3}>Profile</Title>
      <FormProfile />
    </Space>
  );
};
