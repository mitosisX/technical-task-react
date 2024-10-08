import React, { useEffect, useState } from "react";

import {
  Layout,
  Typography,
  Button,
  List,
  Card,
  Input,
  Form,
  notification,
} from "antd";
import MainComponent from "../mainComponent";
import TextArea from "antd/es/input/TextArea";
import { useSelector } from "react-redux";
import {
  fetchGettingStartedInfo,
  updateGettingStartedInfo,
} from "../../backend_handler/endpointsController";
import { useForm } from "antd/es/form/Form";

const { Header, Content } = Layout;
const { Title } = Typography;

const GettingStartedAdmin = () => {
  const { user, token } = useSelector((state) => state);
  const [form] = useForm();

  useEffect(() => {
    fetchGettingStarted();
  }, []);

  const fetchGettingStarted = async () => {
    const response = await fetchGettingStartedInfo(token);
    if (response.status === 200) {
      form.setFieldsValue({ content: response.data.content });
    }
  };

  const handleSubmit = async (values) => {
    const response = await updateGettingStartedInfo(values, token);
    if (response.status === 200) {
      notification.success({
        message: "Success",
        threshold: 3,
        description: "Getting started info updated!",
      });
    } else {
      notification.console.error();
      ({
        message: "Error",
        threshold: 3,
        description: "Could not update the info!",
      });
    }
  };

  return (
    <MainComponent>
      <Layout>
        <Header
          style={{
            backgroundColor: "#1677ff",
            color: "white",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Title
            level={2}
            style={{
              color: "white",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            Golf Club Fitting Experience
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Card>
            <Title level={3}>What to Expect</Title>

            <Form form={form} onFinish={handleSubmit}>
              <Form.Item name="content" required>
                <TextArea />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                style={{ marginTop: 20 }}
                htmlType="submit"
              >
                Update
              </Button>
            </Form>
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default GettingStartedAdmin;
