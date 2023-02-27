import { createContext, useContext } from "react";
import { AppContent } from "../../types/app-content";

export const AppContext: React.Context<AppContent> = createContext<AppContent>({
  api: null,
  contextHolder: null,
  current: undefined,
  setCurrent: undefined,
  errorNotification: undefined,
});

export const useAppContext = () => useContext(AppContext);
