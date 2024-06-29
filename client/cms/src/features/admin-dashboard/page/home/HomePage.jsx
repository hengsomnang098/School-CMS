import { Space, Typography } from "antd";
import HomeCard from "./HomeCard";
import {
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
  HddOutlined,
} from "@ant-design/icons";
import MainPage from "../../components/page/MainPage";

const HomePage = () => {
  return (
    <MainPage>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space
          direction="horizontal"
          className="items-center w-full flex flex-wrap "
          size={20}
        >
          <HomeCard
            title={"Total Contents"}
            value={"12345"}
            icon={
              <ShoppingCartOutlined
                style={{
                  fontSize: "30px",
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  padding: "8",
                }}
              />
            }
          />
          <HomeCard
            title={"Total Users"}
            value={"12345"}
            icon={
              <UserOutlined
                style={{
                  fontSize: "30px",
                  color: "green",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  padding: "8",
                }}
              />
            }
          />
          <HomeCard
            title={"Total Student"}
            value={"12345"}
            icon={
              <UserAddOutlined
                style={{
                  fontSize: "30px",
                  color: "green",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  padding: "8",
                }}
              />
            }
          />
          <HomeCard
            title={"Total Article"}
            value={"12345"}
            icon={
              <HddOutlined
                style={{
                  fontSize: "30px",
                  color: "green",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  padding: "8",
                }}
              />
            }
          />
        </Space>
      </Space>
    </MainPage>
  );
};

export default HomePage;
