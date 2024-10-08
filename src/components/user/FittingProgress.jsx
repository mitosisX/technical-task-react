import React from "react";
import { Layout, Typography, Steps, Card } from "antd";
import MainComponent from "../mainComponent";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

const FittingProgress = () => {
  // Sample data for fitting steps
  const fittingSteps = [
    {
      title: "Fitting Request Submitted",
      status: "finish", // 'finish', 'process', or 'wait'
    },
    {
      title: "Fitting being Prepped",
      status: "process",
    },
    {
      title: "Fitting Scheduled",
      status: "wait",
    },
    {
      title: "Fitting Canceled",
      status: "wait",
    },
    {
      title: "Fitting Completed",
      status: "wait",
    },
  ];

  return (
    <MainComponent>
      <Layout>
        <Header
          style={{
            backgroundColor: "#1677ff",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Title level={2} style={{ color: "white", margin: 0 }}>
            Fitting Progress
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Card>
            <Title level={3}>Your Fitting Progress</Title>
            <Steps current={1}>
              {fittingSteps.map((step, index) => (
                <Step key={index} title={step.title} status={step.status} />
              ))}
            </Steps>
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default FittingProgress;
