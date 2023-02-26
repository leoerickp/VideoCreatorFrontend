import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FormVideo } from "./FormVideo";

export const CardFormVideo = ({ initialValues = {} }: any) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Title level={3}>Form video</Title>
      <FormVideo initialValues={initialValues} />
    </Space>
  );
};
