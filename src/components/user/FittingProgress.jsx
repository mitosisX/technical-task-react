import { useEffect, useState } from "react";
import { Layout, Typography, Steps, Card, Row, Col, Tag } from "antd";
import MainComponent from "../mainComponent";
import { useLocation } from "react-router-dom";
import { fetchUserFittingProgress } from "../../backend_handler/endpointsController";
import { humanizeDate } from "../../utils/date";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

const FittingProgress = () => {
  const { user, token } = useState((state) => state);
  const [userFittings, setUserFittings] = useState([]);
  const location = useLocation();

  const { fitting_id } = location.state;

  useEffect(() => {
    fetchFittingProgress();
  }, []);

  const fetchFittingProgress = async () => {
    const response = await fetchUserFittingProgress(fitting_id, token);
    if (response.status === 200) {
      setUserFittings(response.data.data);
    }
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
            Fitting Progress
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Row gutter={16}>
            {userFittings?.map((fitting) => (
              <Col span={8} key={fitting.id} style={{ marginBottom: "20px" }}>
                <Card
                  title={`Stage: ${fitting.stage}`}
                  bordered
                  onClick={() => handleCardClick(fitting.fitting_id)}
                >
                  <strong>Date: </strong>
                  <Tag color={"green"}>{humanizeDate(fitting.timestamp)}</Tag>
                </Card>
              </Col>
            )) || <p>No Data</p>}
          </Row>
        </Content>
      </Layout>
    </MainComponent>
  );
};

export default FittingProgress;
