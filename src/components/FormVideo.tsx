import { Form } from "antd";
import { InputVideoTitle } from "./InputVideoTitle";
import { InputVideoLink } from "./InputVideoLink";
import { InputVideoDescription } from "./InputVideoDescription";
import { InputVideoPublished } from "./InputVideoPublished";
import { ButtonSend } from "./ButtonSend";
import { useVideoDataContext } from "../contexts/videosdata/VideoDataContext";
import { formItemLayout } from "../constants/form-items-layout";

export const FormVideo = ({ initialValues = {} }: any) => {
  const { createNewVideo, updateVideo } = useVideoDataContext();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    if (!!initialValues.id) {
      updateVideo(initialValues.id, values);
    } else {
      createNewVideo(values);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={initialValues}
      style={{ maxWidth: 800 }}
      scrollToFirstError
    >
      <InputVideoTitle />
      <InputVideoLink />
      <InputVideoDescription />
      <InputVideoPublished />
      <ButtonSend />
    </Form>
  );
};
