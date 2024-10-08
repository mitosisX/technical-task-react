import React, { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Card, Tag } from "antd";
import { useSelector } from "react-redux";
import MainComponent from "../mainComponent";
import { fetchUserProfiles } from "../../backend_handler/endpointsController";

const { Header, Content } = Layout;
const { Title } = Typography;

const UserProfiles = () => {
  const { user, token } = useSelector((state) => state);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const response = await fetchUserProfiles(token);
    if (response.status === 200) {
      setProfiles(response.data);
      console.log(response);
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
            User Profiles
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Row gutter={16}>
            {profiles.map((profile) => (
              <Col span={8} key={profile.id} style={{ marginBottom: "20px" }}>
                <Card title={profile.username} bordered>
                  <p>Adress: {profile.address}</p>
                  <p>Email: {profile.email}</p>
                  <p>Phone: {profile.phone}</p>
                  <p>GCS: {profile.golf_club_size}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default UserProfiles;
