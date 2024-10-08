import React, { useEffect, useState } from "react";

import { Layout, Typography, Button, List, Card } from "antd";
import MainComponent from "../mainComponent";
import { useSelector } from "react-redux";
import { fetchGettingStartedInfo } from "../../backend_handler/endpointsController";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const GettingStarted = () => {
  const { user, token } = useSelector((state) => state);
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetchGettingStarted();
  }, []);

  const fetchGettingStarted = async () => {
    const response = await fetchGettingStartedInfo(token);
    if (response.status === 200) {
      setInfo(response.data.content);
    }
  };

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
            <Paragraph>{info}</Paragraph>
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default GettingStarted;
