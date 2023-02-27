import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/appcontext/AppContext";

export const useHandleMenuClicks = () => {
    const { current, setCurrent } = useAppContext()
    const navigate = useNavigate();

    const onClick: MenuProps["onClick"] = (e: any) => {
        if (e.key !== "leoerickp") {
            navigate(e.key);
            setCurrent(e.key);
        }
        if (e.key === "logout") {
            navigate(`/${e.key}`);
        }
    };

    return {
        current,
        onClick,
        navigate,
        setCurrent,
    }
}