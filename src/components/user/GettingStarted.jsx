import React from "react";

import { Layout, Typography, Button, List, Card } from "antd";
import MainComponent from "../mainComponent";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const GettingStarted = () => {
  return (
    <MainComponent>
      <Layout>
        <Header
          style={{
            backgroundColor: "#1677ff",
            color: "white",
            alignContent: "center",
          }}
        >
          <Title level={2} style={{ color: "white" }}>
            Golf Club Fitting Experience
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Card>
            <Title level={3}>What to Expect</Title>
            <Paragraph>
              When you come in for a golf club fitting, expect a personalized
              experience designed to enhance your game. You'll work closely with
              a professional fitter who will assess your current equipment and
              analyze your swing using advanced technology.
            </Paragraph>
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default GettingStarted;
