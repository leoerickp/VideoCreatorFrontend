import { Form, Spin } from "antd";
import { useHandleAuthActions } from "../hooks/useHandleAuthActions";
import { InputEmail } from "./InputEmail";
import { InputFullName } from "./InputFullName";
import { InputPassword } from "./InputPassword";
import { SignUpLogin } from "./SignUpLogin";

export const FormSignUp = () => {
  const { connecting, signUpSubmit } = useHandleAuthActions();
  const [form] = Form.useForm();

  return (
    <Spin spinning={connecting} delay={500}>
      <Form layout="horizontal" form={form} onFinish={signUpSubmit}>
        <InputFullName />
        <InputEmail />
        <InputPassword />
        <SignUpLogin />
      </Form>
    </Spin>
  );
};
