import { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Tag,
  Modal,
  Select,
  notification,
} from "antd";
import { useSelector } from "react-redux";
import MainComponent from "../mainComponent";
import {
  fetchUserFittingsAdmin,
  setFittingStatus,
} from "../../backend_handler/endpointsController";
import { humanizeDate } from "../../utils/date";

const { Header, Content } = Layout;
const { Title } = Typography;

const FittingRequests = () => {
  const { user, token } = useSelector((state) => state);
  const [userFittings, setUserFittings] = useState([]);
  const [isSaveReqModalOpen, setIsSaveReqModalOpen] = useState(false);
  const [currFittingID, setCurrFittingID] = useState(null);
  const [fittingTask, setFittingTask] = useState(null);

  useEffect(() => {
    fetchFittings();
  }, []);

  const handleFittingTask = (value) => {
    setFittingTask(value);
  };

  const fetchFittings = async () => {
    const response = await fetchUserFittingsAdmin(token);
    if (response.status === 200) {
      console.log(response.data.data);
      setUserFittings(response.data.data);
    }
  };

  const handleSaveReqCancel = () => {
    setIsSaveReqModalOpen(false);
  };

  const handleCardClick = (id) => {
    setCurrFittingID(id);
    setIsSaveReqModalOpen(true);
  };

  const handleSaveReqCacheOk = async () => {
    const response = await setFittingStatus(currFittingID, fittingTask, token);
    if (response.status === 200) {
      notification.success({
        message: "Success",
        threshold: 3,
        description: "Fitting task completed! Reload page",
      });
    } else {
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
                <Card
                  title={`Date: ${humanizeDate(fitting.scheduled_date)}`}
                  bordered
                  onClick={() => handleCardClick(fitting.fitting_id)}
                >
                  <p>{fitting.comments}</p>
                  <p>{fitting.name || "----"}</p>
                  <p>{fitting.email || "----"}</p>
                  <p>{fitting.phone || "-----"}</p>
                  <Tag color={"green"}>{fitting.status}</Tag>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
        <Modal
          title={"Fitting status"}
          open={isSaveReqModalOpen}
          onOk={handleSaveReqCacheOk}
          onCancel={handleSaveReqCancel}
        >
          <Select
            style={{ width: "100%" }}
            onChange={(value) => handleFittingTask(value)}
          >
            {[
              "submitted",
              "prepped",
              "scheduled",
              "cancelled",
              "completed",
            ].map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Modal>
      </Layout>
    </MainComponent>
  );
};

export default FittingRequests;
