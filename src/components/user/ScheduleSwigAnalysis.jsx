import { useState } from "react";
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
import { scheduleSwigAnalysis } from "../../backend_handler/endpointsController";
import { useSelector } from "react-redux";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const ScheduleSwingAnalysis = () => {
  const { user, token } = useSelector((state) => state);

  const [dateTime, setDateTime] = useState(null);
  const [userTime, setUserTime] = useState(null);
  const [comments, setComments] = useState("");

  const handleDateChange = (date) => {
    setDateTime(date);
  };

  const handleTimeChange = (time, timeString) => {
    setUserTime(timeString);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = async (values) => {
    const scheduled_date = dateTime.format().split("T")[0];

    const sendData = {
      type: "swig_analysis",
      user_id: user.user_id,
      scheduled_date,
      comments: comments,
      scheduled_time: userTime,
    };

    try {
      const response = await scheduleSwigAnalysis(sendData, token);

      if (response.status === 200) {
        notification.success({
          message: "Success",
          threshold: 3,
          description: "Swig analysis scheduled successfuly!",
        });
      }
    } catch {
      notification.error({
        message: "Error",
        threshold: 3,
        description: "Swig analysis scheduling failed!",
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
                <TimePicker onChange={handleTimeChange} format="HH:mm:ss" />
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
