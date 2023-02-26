import { MenuProps } from "antd";
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const useHandleMenuClicks = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("home");


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
        setCurrent
    }
}