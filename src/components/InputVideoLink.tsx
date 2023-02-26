import { AutoComplete, Form, Input } from "antd";
import { useState } from "react";

export const InputVideoLink = () => {
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
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
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
      >
        <Input />
      </AutoComplete>
    </Form.Item>
  );
};
