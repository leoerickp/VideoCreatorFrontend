import { Form, Input } from "antd";

export const InputVideoDescription = () => {
  return (
    <Form.Item name="description" label="Description:">
      <Input.TextArea rows={6} showCount maxLength={1000} />
    </Form.Item>
  );
};
