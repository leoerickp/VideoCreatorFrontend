import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const ButtonBackLogin = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <Button type="primary" onClick={() => goHome()}>
      Back Login
    </Button>
  );
};
