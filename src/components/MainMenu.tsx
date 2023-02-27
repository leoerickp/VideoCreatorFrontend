import { Menu } from "antd";
import { mainItems } from "../constants/menu-items";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const MainMenu = () => {
  const { current, onClick } = useHandleMenuClicks();
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
