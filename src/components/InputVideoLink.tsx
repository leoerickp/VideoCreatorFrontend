import { AutoComplete, Form, Input, Space } from "antd";
import { useState } from "react";

export const InputVideoLink = () => {
  const form = Form.useFormInstance();
  const [video, setVideo] = useState(form.getFieldValue("link") || "");
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const changeVideo = (e: any) => {
    setVideo(e.target.value);
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <>
      <Form.Item
        name="link"
        label="Link:"
        rules={[
          { required: true, message: "Please input the video link (only URL)" },
        ]}
      >
        <AutoComplete
          options={websiteOptions}
          onChange={onWebsiteChange}
          placeholder="Video URL Ex. http://..."
          onBlur={changeVideo}
        >
          <Input />
        </AutoComplete>
      </Form.Item>
      <Space direction="vertical" style={{ width: "100%" }} align="end">
        <iframe
          src={video}
          allowFullScreen
          style={{ border: 0, borderRadius: "15px 0px" }}
        ></iframe>
      </Space>
    </>
  );
};
