import {
  Layout,
  Menu as AntMenu,
  Dropdown,
  Avatar,
  Modal,
  Menu,
  notification,
} from "antd";
const { Header } = Layout;
import { useState } from "react";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { logout } from "../../backend_handler/endpointsController";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Item } = Menu;

export default function TopNavBar({ collapsed, toggleCollapsed }) {
  const [logoutType, setLogoutType] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, token } = useSelector((state) => state);

  const navigate = useNavigate();
  const openSuccessNotificationWithIconCustom = (type) => {
    notification.success({
      message: "Success",
      threshold: 3,
      description: type,
    });
  };
  const openNotificationWithIconCustom = (type) => {
    notification.error({
      message: "Error",
      threshold: 3,
      description: type,
    });
  };
  const handleLogout = async () => {
    navigate("/");
    setModalVisible(false); // Close the modal after handling logout
  };

  const handleLogoutModal = () => {
    setModalVisible(true); // Show the modal when a menu item is clicked
  };

  const handlenavigateToProfile = () => {
    navigate("/my-profile");
  };

  const getMenu2 = () => (
    <AntMenu>
      <AntMenu.Item onClick={handlenavigateToProfile} key="1">
        Profile
      </AntMenu.Item>
    </AntMenu>
  );

  const notificationMenu2 = (
    <Dropdown overlay={getMenu2()} placement="bottomRight" arrow>
      <Avatar
        icon={<SettingOutlined />}
        size={25}
        style={{ marginRight: "3px", marginLeft: "20px" }}
      />
    </Dropdown>
  );

  const profileMenu = (
    <Menu onClick={handleLogoutModal} style={{ marginTop: "10px" }}>
      <Item key="logout">
        <SettingOutlined style={{ fontSize: "15px", marginRight: "8px" }} />
        Logout
      </Item>
    </Menu>
  );

  const profileIconStyle = collapsed
    ? { cursor: "pointer" }
    : { cursor: "pointer" };
  return (
    <div>
      <Header
        style={{
          background: "#fff",
          padding: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%", // Set width to 100%
          zIndex: 1000,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)", // Add box shadow for elevation
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Spacer */}
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          {notificationMenu2}
          <div style={{ marginRight: "20px" }}>{/* Add some spacing */}</div>
          <Dropdown overlay={profileMenu} placement="bottomRight">
            <Avatar
              size="small"
              icon={<UserOutlined />}
              style={profileIconStyle}
            />
          </Dropdown>
        </div>
      </Header>
      <Modal
        title="Logout Confirmation"
        open={modalVisible}
        onOk={handleLogout}
        onCancel={() => setModalVisible(false)}
        confirmLoading={loading}
      >
        <p>Are you sure you want to logout</p>
      </Modal>
    </div>
  );
}
