import { AppProvider } from "./contexts/appcontext/AppProvider";
import { AppRoutes } from "./router/AppRoutes";

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
