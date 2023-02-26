import { Menu } from "antd";
import { mainItems } from "../constants/menu-items";

export const MainMenu = ({ onClick, current }: any) => {
  return (
    <Menu
      theme={"dark"}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={mainItems}
    />
  );
};
