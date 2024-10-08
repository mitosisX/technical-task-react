import React from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import MainComponent from "../mainComponent";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <MainComponent>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            backgroundColor: "#1677ff",
            color: "white",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <div className="logo" style={{ color: "#fff", fontSize: "24px" }}>
            Home
          </div>
        </Header>
        <Content style={{ padding: "50px", textAlign: "center" }}>
          <Row justify="center">
            <Col span={12}>
              <Title level={1}>Welcome to Our Service!</Title>
              <Paragraph>
                Discover how our platform can help you achieve your goals with
                ease and efficiency.
              </Paragraph>
              <Link to="/getting-started">
                <Button type="primary" size="large">
                  Get Started
                </Button>
              </Link>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>Omega Msiska</Footer>
      </Layout>
    </MainComponent>
  );
};

export default Home;
