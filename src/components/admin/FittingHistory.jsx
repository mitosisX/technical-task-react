import { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Card, Tag } from "antd";
import { useSelector } from "react-redux";
import MainComponent from "../mainComponent";
import { fetchUserFittingsAdmin } from "../../backend_handler/endpointsController";
import { humanizeDate } from "../../utils/date";

const { Header, Content } = Layout;
const { Title } = Typography;

const FittingHistory = () => {
  const { user, token } = useSelector((state) => state);
  const [userFittings, setUserFittings] = useState([]);

  useEffect(() => {
    fetchFittings();
  }, []);

  const fetchFittings = async () => {
    const response = await fetchUserFittingsAdmin(user.user_id, token);
    if (response.status === 200) {
      console.log(response.data.data);
      setUserFittings(response.data.data);
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
            Fitting History
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Row gutter={16}>
            {userFittings?.map((fitting) => (
              <Col span={8} key={fitting.id} style={{ marginBottom: "20px" }}>
                <Card
                  title={`Fitting for ${humanizeDate(fitting.scheduled_date)}`}
                  bordered
                >
                  <p>
                    {fitting.comments}
                    <br />
                    <strong style={{ marginTop: "50px" }}>Time:</strong>{" "}
                    {fitting.time}
                    <br />
                    <strong>Type</strong> {fitting.type}
                  </p>
                  <strong>Status: </strong>
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

export default FittingHistory;
