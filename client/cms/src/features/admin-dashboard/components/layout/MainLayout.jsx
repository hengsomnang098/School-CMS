import { Avatar, Button, Layout, Typography } from "antd";
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
import { getUser, isLogin } from "../../../../app/api/config/helper";
import { observer } from "mobx-react-lite";
// import FooterPage from "./Footer";

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
      <Layout className="w-full overflow-auto justify-center fixed left-0 top-0 bottom-0">
        <Sider
          className=" p-0 bg-main-color"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          collapsedWidth={0}
          style={{
            padding: 0,
            background: "#10AC84",
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
              background: "#10AC84",
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
              <Typography.Title level={5} className="text-white">
                hengsomnang
              </Typography.Title>

              <Avatar style={{}} icon={<UserOutlined />} className="mr-4" />
            </div>
          </Header>

          <Content className="overflow-auto m-3">
            <Outlet />
          </Content>
          {/* <FooterPage /> */}
        </Layout>
      </Layout>
    </>
  );
}

export default observer(MainLayout);
