import { Col, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { Logo } from "../components/Logo";
import { MainMenu } from "../components/MainMenu";
import { UserMenu } from "../components/UserMenu";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const HeaderBar = () => {
  const { current, onClick } = useHandleMenuClicks();

  return (
    <Header>
      <Row>
        <Col span={6}>
          <Logo />
        </Col>
        <Col span={12}>
          <MainMenu onClick={onClick} current={current} />
        </Col>
        <Col span={6}>
          <UserMenu onClick={onClick} current={current} />
        </Col>
      </Row>
    </Header>
  );
};
