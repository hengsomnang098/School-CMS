import { Avatar, Button, Layout } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useEffect, useState } from "react";
import {
  MenuOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser, isLogin, logout } from "../../../../app/api/config/helper";
import { observer } from "mobx-react-lite";

const { Header, Sider } = Layout;
function MainLayout() {
  const [collapsed, setCollapsed] = useState(true);

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
      <Layout className="w-full overflow-auto justify-center fixed  left-0 top-0 bottom-0 ">
        <Sider
          className="bg-white p-0"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          collapsedWidth={0}
          style={{
            background: "#ffffff",
            padding: 0,
          }}
        >
          {/* Logo Dashboard */}
          <Logo />

          {/* Menu list */}
          <MenuList />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#ffffff",
            }}
            className="justify-between flex items-center px-4"
          >
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuOutlined />}
            />
            <div className="flex items-center">
              {/* Other header elements */}

              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
                className="mr-4"
              />

              {/* Logout button */}
              <Button
                type="link"
                className="text-red-600 hover:text-red-800 "
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </div>
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
