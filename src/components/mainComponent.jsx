/* eslint-disable react/prop-types */
import { useState } from "react";
import { Layout } from "antd";
import TopNavBar from "./navigation/TopNavBar";
import SideNavBar from "./navigation/SideNavBar";
import AppFooter from "./navigation/FooterComponent";

const { Content } = Layout;

const MainComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideNavBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <TopNavBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout style={{ marginLeft: collapsed ? 80 : 256 }}>
        <Content
          style={{
            margin: "80px 16px 16px",
            overflowY: "auto",
            height: "calc(100vh - 80px)",
          }}
        >
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 360,
            }}
          >
            {children}
            <AppFooter />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainComponent;
