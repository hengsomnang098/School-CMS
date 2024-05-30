import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import FooterPage from "./Footer";

const { Header, Sider } = Layout;
function MainLayout() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          theme={darkTheme ? "dark" : "light "}
          className=" text-white"
          onCollapse={(value) => setCollapsed(value)}
        >
          <Logo />
          <MenuList darktheme={darkTheme} />
          <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuOutlined />}
            />
          </Header>
          <Content>
            <Outlet />
          </Content>
          <FooterPage />
        </Layout>
      </Layout>
    </>
  );
}

export default MainLayout;
