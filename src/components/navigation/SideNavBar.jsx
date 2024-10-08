/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu as AntMenu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  FileSearchOutlined,
  MedicineBoxOutlined,
  PieChartOutlined,
  ScheduleOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function getItem(label, key, icon, children, type, link) {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
}

export default function SideNavBar({ collapsed, toggleCollapsed }) {
  const { user, token } = useSelector((state) => state);

  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const [hovered] = useState(false);

  const consumer_items = [
    getItem("Home", "1", null, null, null, "/home"),
    getItem("Getting Started", "2", null, null, null, "/getting-started"),
    getItem(
      "Schedule a Swing Analysis",
      "3",
      null,
      null,
      null,
      "/schedule-swig-analysis"
    ),
    getItem("Schedule a Fitting", "4", null, null, null, "/schedule-fitting"),
    getItem("Fitting Progress", "5", null, null, null, "/fitting-progress"),
    getItem("Account History", "6", null, null, null, "/account-history"),
    getItem("My Profile", "7", null, null, null, "/my-profile"),
  ];

  const admin_items = [
    getItem("Home", "1", null, null, null, "/home"),
    getItem("Getting Started", "2", null, null, null, "/get-started-admin"),
    getItem(
      "Fitting Requests",
      "3",
      null,
      null,
      null,
      "/schedule-swig-analysis"
    ),
    getItem("Fitting Tasks", "4", null, null, null, "/schedule-fitting"),
    getItem("Fitting Schedule", "5", null, null, null, "/fitting-progress"),
    getItem("Fitting History", "6", null, null, null, "/account-history"),
    getItem("Customer Profiles", "7", null, null, null, "/user-profiles"),
  ];

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const menuStyle = {
    marginTop: "16px",
  };

  return (
    <div>
      <Sider
        width={collapsed ? 80 : 256}
        style={{
          position: "fixed",
          left: 0,
          height: "100vh",
          overflowY: "auto",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        theme="light"
      >
        <div
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div style={{ overflowY: "auto", height: "calc(100% - 64px)" }}>
          <AntMenu
            selectedKeys={[selectedKey]}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            style={menuStyle}
          >
            {(user.is_admin ? admin_items : consumer_items).map(
              (item, index) => {
                return (
                  <AntMenu.Item
                    key={`${index}-${item.link}`}
                    icon={item.icon}
                    className={
                      selectedKey == item.link ? "ant-menu-item-selected" : ""
                    }
                    onClick={() => setSelectedKey(item.link)}
                  >
                    <Link to={item.link}>{item.label}</Link>
                  </AntMenu.Item>
                );
              }
            )}
          </AntMenu>
        </div>
      </Sider>
    </div>
  );
}
