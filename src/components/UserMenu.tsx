import { Menu } from "antd";
import { userItems } from "../constants/user-menu-items";

export const UserMenu = ({ onClick, current }: any) => {
  return (
    <Menu
      theme={"dark"}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={userItems}
    />
  );
};
