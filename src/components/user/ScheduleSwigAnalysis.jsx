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
} from "antd";
import moment from "moment";
import MainComponent from "../mainComponent";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const ScheduleSwingAnalysis = () => {
  const [dateTime, setDateTime] = useState(null);
  const [comments, setComments] = useState("");

  const handleDateChange = (date) => {
    setDateTime(date);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    // Here you would typically handle the form submission
    console.log("Scheduled Date & Time:", dateTime.format());
    console.log("Comments:", comments);
    alert("Your swing analysis has been scheduled!");
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
            Schedule a Swing Analysis
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
              <Form.Item label="Select Date" required>
                <DatePicker onChange={handleDateChange} />
              </Form.Item>
              <Form.Item label="Select Time" required>
                <TimePicker
                  onChange={(time) => setDateTime(time)}
                  format="HH:mm"
                  disabled={!dateTime}
                />
              </Form.Item>
              <Form.Item label="Comments">
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

export default ScheduleSwingAnalysis;
