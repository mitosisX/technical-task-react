import React from "react";
import { Avatar, Typography, Row, Col, Card, Divider, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import MainComponent from "../../components/mainComponent";
import AppFooter from "../../components/navigation/FooterComponent";
import Breadcrumbs from "../../components/widgets/BreadCrumbs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ProfileHome = () => {
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state);

  const handlenavigateToChangePassword = () => {
    navigate("/change-password");
  };

  const handlenavigateToUserActivity = () => {
    navigate("/user-activity");
  };

  return (
    <MainComponent>
      <div style={{ padding: "20px" }}>
        {/* Profile Header */}
        <Row align="middle" gutter={[16, 16]} style={{ marginBottom: "20px" }}>
          <Col>
            <Avatar size={96} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Title level={2}>
              {user.data.firstname + " " + user.data.lastname}
            </Title>
          </Col>
        </Row>

        {/* Divider */}
        <Divider />

        {/* Medical Information */}
        <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
          <Col span={12}>
            <Card title="Personal Information">
              <Paragraph>
                <strong>Name: </strong>
                {user.data.firstname + " " + user.data.lastname}
              </Paragraph>
              <Paragraph>
                <strong>National ID: </strong> {user.data.national_id}
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Contact Information">
              <Paragraph>
                <strong>Email:</strong> {user.data.email}
              </Paragraph>
              <Paragraph>
                <strong>Phone:</strong> {user.data.phone}
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Divider */}
        <Divider />

        {/* Recent Activity */}
        <Card title="Recent Activity">
          {/* Add recent activity here */}
          <Paragraph>No recent activity.</Paragraph>
        </Card>
        {/* Buttons */}
        <Row justify="end" style={{ marginTop: "15px" }}>
          <Col>
            <Button
              type="primary"
              onClick={handlenavigateToChangePassword}
              style={{ marginRight: "10px" }}
            >
              Change Password
            </Button>
            <Button type="primary" onClick={handlenavigateToUserActivity}>
              View Activity Log
            </Button>
          </Col>
        </Row>
      </div>
      <AppFooter />
    </MainComponent>
  );
};

export default ProfileHome;
