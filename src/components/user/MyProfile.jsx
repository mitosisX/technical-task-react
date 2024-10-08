import React, { useEffect, useState } from "react";
import { Layout, Typography, Form, Input, Button, Select, Card } from "antd";
import { useSelector } from "react-redux";
import MainComponent from "../mainComponent";
import { fetchMyProfile } from "../../backend_handler/endpointsController";
import { useForm } from "antd/es/form/Form";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const MyProfile = () => {
  const { user, token } = useSelector((state) => state);
  const [profile, setProfile] = useState([]);
  const [form] = useForm();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const response = await fetchMyProfile(token);
    if (response.status === 200) {
      setProfile(response.data[0]);
      console.log("##### ", response.data[0]);
      form.setFieldsValue(response.data[0]);
    }
  };

  const onFinish = (values) => {
    console.log("Profile Updated:", values);
    // Here you would typically send the updated values to your API
    alert("Profile updated successfully!");
  };

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
            My Profile
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Card>
            <Title level={3}>Update Your Information</Title>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                name="username"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Enter your name" value={"Hello"} />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input placeholder="Enter your address" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>

              <Form.Item
                label="Golf Club Size"
                name="golf_club_size"
                rules={[
                  {
                    required: true,
                    message: "Please select your golf club size!",
                  },
                ]}
              >
                <Input placeholder="Enter your phone number" />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form>
          </Card>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default MyProfile;
