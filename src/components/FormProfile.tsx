import { Form } from "antd";
import { formItemLayout } from "../constants/form-items-layout";
import { useHandleUserActions } from "../hooks/useHandleUserActions";
import { ButtonSend } from "./ButtonSend";
import { InputConfirmPassword } from "./InputConfirmPassword";
import { InputEmail } from "./InputEmail";
import { InputFullName } from "./InputFullName";
import { InputPassword } from "./InputPassword";
import { InputUrlPhoto } from "./InputUrlPhoto";

export const FormProfile = () => {
  const { userData, updateUser } = useHandleUserActions();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    delete values.confirm;
    if (!values.password) {
      delete values.password;
    }
    if (!values.urlPhoto) {
      delete values.urlPhoto;
    }
    updateUser(userData.user.id, values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={userData.user}
      style={{ maxWidth: 800 }}
      scrollToFirstError
    >
      <InputFullName />
      <InputEmail />
      <InputPassword />
      <InputConfirmPassword />
      <InputUrlPhoto />
      <ButtonSend />
    </Form>
  );
};
