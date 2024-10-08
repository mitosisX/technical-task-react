/* eslint-disable no-unused-vars */
import { Form, Input, Button, Card, Row, Col, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../backend_handler/endpointsController";
import { useDispatch } from "react-redux";
import { setLogin } from "../../components/state_management/redux";

const AccountLogin = () => {
  const dispatch = useDispatch();

  const openNotificationWithIcon = () => {
    notification.error({
      message: "Error",
      threshold: 3,
      description: "Incorect Email and Password Combination",
    });
  };
  const openSuccessNotificationWithIcon = () => {
    notification.success({
      message: "Success",
      threshold: 3,
      description: "You Have Logged In Sucessifully",
    });
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await loginUser(values.username, values.password);

      if (response.status === 200) {
        const token = response.data.access;
        const user = response.data.user;
        openSuccessNotificationWithIcon("success");
        dispatch(setLogin({ user: user, token: token }));
        navigate("/home");
      } else if (response.response.status === 400) {
        openNotificationWithIcon("error");
      }
    } catch (error) {
      // console.error("Error Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${
            import.meta.env.BASE_URL
          }images/pexels-pixabay-531880.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col xs={24} sm={20} md={16} lg={12} xl={8}>
            <Card style={{ padding: "20px", margin: "0px" }}>
              <h3
                style={{
                  color: "#337eddb0",
                  fontWeight: "500",
                  marginBottom: "40px",
                }}
              >
                Please sign in to continue.
              </h3>
              <Form
                name="normal_login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <div
                  id="result"
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                ></div>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter your username"
                    style={{ padding: "15px", marginBottom: "15px" }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Enter your password"
                    style={{ padding: "15px", marginBottom: "15px" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      height: "50px",
                      lineHeight: "30px",
                    }}
                    loading={loading}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AccountLogin;
