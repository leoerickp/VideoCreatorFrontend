import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, Switch } from "antd";

export const InputVideoPublished = () => {
  return (
    <Form.Item label="Published:" name="published" valuePropName="checked">
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </Form.Item>
  );
};
