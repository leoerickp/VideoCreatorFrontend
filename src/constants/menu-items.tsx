import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, MenuProps } from "antd";

export const mainItems: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "My favorites",
    key: "favorites",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "My videos",
    key: "myvideos",
    icon: <VideoCameraAddOutlined />,
  },
  {
    label: (
      <a href="https://leoerickp.cf/" target="_blank" rel="noopener noreferrer">
        About me
      </a>
    ),
    key: "leoerickp",
  },
];
