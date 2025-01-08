import { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Form,
  Input,
  Modal,
  Button,
  notification,
} from "antd";
import { useSelector } from "react-redux";
import MainComponent from "../mainComponent";
import {
  createUserProfile,
  fetchUserProfiles,
  updateUserProfile,
} from "../../backend_handler/endpointsController";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const UserProfiles = () => {
  const { user, token } = useSelector((state) => state);
  const [profiles, setProfiles] = useState([]);
  const [form] = useForm();
  const [createUserForm] = useForm();
  const [isSaveReqModalOpen, setIsSaveReqModalOpen] = useState(false);
  const [iscreateUserModalOpen, setIscreateUserModalOpen] = useState(false);
  const [currProfileID, setCurrProfileID] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const response = await fetchUserProfiles(token);
    if (response.status === 200) {
      setProfiles(response.data.data);
      // console.log(response.data.data);
    }
  };

  const handleSaveReqCancel = () => {
    setIsSaveReqModalOpen(false);
  };

  const handlecreateUserModalCancel = () => {
    setIscreateUserModalOpen(false);
  };

  const handleCardClick = (id, index) => {
    const data = profiles[index];

    form.setFieldsValue(data);

    setCurrProfileID(id);
    setIsSaveReqModalOpen(true);
  };

  const onFinish = async (values) => {
    values["user_id"] = currProfileID;

    // console.log("Profile Updated:", values);
    // return;
    const response = await updateUserProfile(values, token);

    if (response.status === 200) {
      notification.success({
        message: "Success",
        threshold: 3,
        description: "Profile updated successfuly!",
      });
    }
  };

  const onCreateUserFinish = async (values) => {
    const response = await createUserProfile(values, token);

    if (response.status === 201) {
      notification.success({
        message: "Success",
        threshold: 3,
        description: "Profile created successfuly!",
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
            User Profiles
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Button
            onClick={() => setIscreateUserModalOpen(true)}
            style={{
              marginBottom: 10,
              background: "white",
              borderRadius: 20,
              borderColor: "white",
            }}
          >
            <PlusOutlined />
          </Button>
          <Row gutter={16}>
            {profiles.map((profile, index) => (
              <Col span={8} key={profile.user} style={{ marginBottom: "20px" }}>
                <Card
                  style={{ cursor: "hand" }}
                  title={"Username: " + profile.name}
                  bordered
                  // onClick={() => handleCardClick(profile.user_id)}
                  onClick={() => handleCardClick(profile.user_id, index)}
                >
                  {/* <p>Name: {profile.name}</p> */}
                  <p>Adress: {profile.address}</p>
                  <p>Email: {profile.email}</p>
                  <p>Phone: {profile.phone}</p>
                  <p>GCS: {profile.golf_club_size}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
        <Modal
          // title={"Fitting status" + currProfileID}
          open={isSaveReqModalOpen}
          okButtonProps={{ hidden: true }}
          // onOk={handleSaveReqCacheOk}
          onCancel={handleSaveReqCancel}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
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
        </Modal>
      </Layout>

      <Modal
        title={"Create a User"}
        open={iscreateUserModalOpen}
        okButtonProps={{ hidden: true }}
        // onOk={handleSaveReqCacheOk}
        onCancel={handlecreateUserModalCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onCreateUserFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter your name" value={"Hello"} />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
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

          <Form.Item hidden initialValue={"consumer"} name="role">
            <Input value="consumer" />
          </Form.Item>

          <Form.Item hidden initialValue={"password"} name="password">
            <Input value="password" />
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
            create
          </Button>
        </Form>
      </Modal>
    </MainComponent>
  );
};

export default UserProfiles;
