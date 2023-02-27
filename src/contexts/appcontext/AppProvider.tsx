import { notification } from "antd";
import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }: any) => {
  const [api, contextHolder] = notification.useNotification();
  const errorNotification = (
    message: React.ReactNode,
    description: React.ReactNode
  ) => {
    api.error({
      message,
      description,
      duration: 3,
      placement: "topRight",
    });
  };
  const [current, setCurrent] = useState("home");

  return (
    <AppContext.Provider
      value={{
        api,
        contextHolder,
        current,
        errorNotification,
        setCurrent,
      }}
    >
      {contextHolder}
      {children}
    </AppContext.Provider>
  );
};
