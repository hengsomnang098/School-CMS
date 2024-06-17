import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useEffect, useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser, isLogin } from "../../../../app/api/config/helper";
import { observer } from "mobx-react-lite";

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
      <Layout className="w-full overflow-auto justify-center fixed h-[100vh] left-0 top-0 bottom-0">
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
            {/* Toogle Darktheme */}
            <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </Header>
          <Content>
            <Outlet />
          </Content>
          {/* <FooterPage /> */}
        </Layout>
      </Layout>
    </>
  );
}

export default observer(MainLayout);
