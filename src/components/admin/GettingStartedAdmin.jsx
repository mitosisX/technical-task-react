import React from "react";

import { Layout, Typography, Button, List, Card, Input } from "antd";
import MainComponent from "../mainComponent";
import TextArea from "antd/es/input/TextArea";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const GettingStartedAdmin = () => {
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

            <TextArea
              name="to_expect"
              value="Expect a personalized experience designed to enhance your game. You'll work closely with a professional."
            />
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default GettingStartedAdmin;
