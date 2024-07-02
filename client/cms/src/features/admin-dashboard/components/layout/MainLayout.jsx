import { Avatar, Button, Layout, Radio, Typography } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useEffect, useState } from "react";
import { MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import {
  getProfile,
  getUser,
  isLogin,
} from "../../../../app/api/config/helper";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
// import FooterPage from "./Footer";

const { Header, Sider } = Layout;
function MainLayout() {
  const [, i18] = useTranslation("global");
  const [collapsed, setCollapsed] = useState(false);
  const profile = getProfile();
  const user = getUser();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin()) {
      navigate("/login");
    }
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18.changeLanguage(storedLanguage);
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [i18, navigate]);

  const handleChangeLanguage = (event) => {
    const languageCode = event.target.value;
    i18.changeLanguage(languageCode);
    localStorage.setItem("language", languageCode); // Store the selected language in localStorage
  };

  return (
    <>
      <Layout className="w-full overflow-auto justify-center fixed left-0 top-0 bottom-0">
        <Sider
          className=" p-0 bg-main-color"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          collapsedWidth={0}
          style={{
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
            <div className="flex items-center mx-5 flex-row">
              <Radio.Group
                onChange={(e) => handleChangeLanguage(e)}
                defaultValue={localStorage.getItem("language")}
              >
                <Radio value={"en"}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="../../../../../public/english.png"
                      alt="English"
                      style={{ width: 20, marginRight: 8 }}
                    />
                    English
                  </span>
                </Radio>
                <Radio value={"kh"}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="../../../../../public/cambodia.png"
                      alt="Khmer"
                      style={{ width: 20, marginRight: 8 }}
                    />
                    Khmer
                  </span>
                </Radio>
              </Radio.Group>

              {/* Other header elements */}
              <Typography.Title
                level={window.innerWidth < 768 ? 5 : 4}
                className="text-white mx-5"
              >
                {user}
              </Typography.Title>

              <Avatar
                size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 60 }}
                src={<img src={profile} alt="avatar" />}
                // icon={<UserOutlined />}
                className="mr-4"
              />
            </div>
          </Header>

          <Content className="overflow-auto">
            <Outlet />
          </Content>
          {/* <FooterPage /> */}
        </Layout>
      </Layout>
    </>
  );
}

export default observer(MainLayout);
