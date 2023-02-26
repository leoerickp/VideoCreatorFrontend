import { Form, Input } from "antd";

export const InputVideoTitle = () => {
  return (
    <Form.Item
      label="Title:"
      name="title"
      rules={[
        {
          required: true,
          message: "Please input the video title",
        },
      ]}
    >
      <Input placeholder="Ex. Life in the sea" />
    </Form.Item>
  );
};
