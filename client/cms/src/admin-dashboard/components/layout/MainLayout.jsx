import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useEffect, useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import FooterPage from "./Footer";
import { getUser, isLogin } from "../../../config/helper";
// import { getUser } from "../../config/helper";

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

  const user = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin()) {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null;
  }
  return (
    <>
      <Layout className="w-full max-h-max overflow-hidden justify-center">
        <Sider
          collapsed={collapsed}
          theme={darkTheme ? "dark" : "light "}
          className=" text-white"
          onCollapse={(value) => setCollapsed(value)}
        >
          {/* Logo Dashboard */}
          <Logo />

          {/* Menu list */}
          <MenuList darktheme={darkTheme} />

          {/* Toogle Darktheme */}
          <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="justify-between"
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
