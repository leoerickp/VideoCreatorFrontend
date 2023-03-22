import { Menu } from "antd";
import { mainItems } from "../constants/menu-items";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const MainMenu = () => {
  const { currentMenuOption, onClick } = useHandleMenuClicks();
  return (
    <Menu
      theme={"dark"}
      onClick={onClick}
      selectedKeys={[currentMenuOption]}
      mode="horizontal"
      items={mainItems}
    />
  );
};
