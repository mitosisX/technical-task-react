import React, { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Card, Tag } from "antd";
import { useSelector } from "react-redux";
import MainComponent from "../mainComponent";
import { fetchUserFittings } from "../../backend_handler/endpointsController";

const { Header, Content } = Layout;
const { Title } = Typography;

const FittingRequests = () => {
  const { user, token } = useSelector((state) => state);
  const [userFittings, setUserFittings] = useState([]);

  useEffect(() => {
    fetchFittings();
  }, []);

  const fetchFittings = async () => {
    const response = await fetchUserFittings(token);
    if (response.status === 200) {
      setUserFittings(response.data);
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
            Fitting Requests
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Row gutter={16}>
            {userFittings.map((fitting) => (
              <Col span={8} key={fitting.id} style={{ marginBottom: "20px" }}>
                <Card title={`Fitting on ${fitting.date}`} bordered>
                  <p>
                    {fitting.comments}
                    <br />
                    <strong style={{ marginTop: "50px" }}>Time:</strong>{" "}
                    {fitting.time}
                  </p>
                  <Tag color={"green"}>{fitting.status}</Tag>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default FittingRequests;
