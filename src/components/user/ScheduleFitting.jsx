import React, { useState } from "react";
import {
  Layout,
  Typography,
  Button,
  Form,
  DatePicker,
  TimePicker,
  Input,
  Card,
  notification,
} from "antd";
import MainComponent from "../mainComponent";

import { useSelector } from "react-redux";
import { scheduleFitting } from "../../backend_handler/endpointsController";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const ScheduleFitting = () => {
  const { user, token } = useSelector((state) => state);

  const [dateTime, setDateTime] = useState(null);
  const [userTime, setUserTime] = useState(null);
  const [comments, setComments] = useState("");

  const handleDateChange = (date) => {
    setDateTime(date); //.format().split("T")[0]);
  };

  const handleTimeChange = (time, timeString) => {
    setUserTime(timeString);
  };

  const handleCommentsChange = (e) => {
    // setComments(e.target.value);
  };

  const handleSubmit = async (values) => {
    // Here you would typically handle the form submission
    const date = dateTime.format().split("T")[0];

    const sendData = {
      user: user.id,
      date,
      comments: values.comments,
      time: userTime,
    };

    try {
      const response = await scheduleFitting(sendData, token);

      if (response.status === 200) {
        notification.success({
          message: "Success",
          threshold: 3,
          description: "Fitting scheduled successfuly!",
        });
      }
    } catch {
      notification.error({
        message: "Error",
        threshold: 3,
        description: "Fitting schedule failed!",
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
          <Title level={2} style={{ color: "white" }}>
            Schedule a Fitting
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Card>
            <Title level={3}>Select Date & Time</Title>
            <Paragraph>
              Please choose a suitable date and time for your swing analysis.
              You can also add any comments or special requests.
            </Paragraph>
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item name="date" label="Select Date" required>
                <DatePicker onChange={handleDateChange} />
              </Form.Item>
              <Form.Item name="time" label="Select Time" required>
                <TimePicker onChange={handleTimeChange} format="HH:mm:ss" />
              </Form.Item>
              <Form.Item name="comments" label="Comments">
                <Input.TextArea
                  value={comments}
                  onChange={handleCommentsChange}
                  placeholder="Any additional comments or requests"
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form>
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default ScheduleFitting;
