import { Space, Typography } from "antd";
import HomeCard from "./HomeCard";
import {
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
  HddOutlined,
} from "@ant-design/icons";
import MainPage from "../../components/page/MainPage";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const HomePage = () => {
  const { t } = useTranslation("global");
  const {
    slideStore,
    categoryStore,
    mediaStore,
    articleStore,
    contentStore,
    managementTeamStore,
    studentStore,
    userStore,
  } = useStore();

  useEffect(() => {
    slideStore.getList();
    categoryStore.getList();
    mediaStore.getList("");
    articleStore.articleList();
    contentStore.getList();
    managementTeamStore.getList();
    studentStore.getList();
    userStore.getList("");
  }, [
    articleStore,
    categoryStore,
    contentStore,
    managementTeamStore,
    mediaStore,
    slideStore,
    studentStore,
    userStore,
  ]);
  return (
    <MainPage loading={contentStore.loading}>
      <Space size={5} direction="vertical">
        <Typography.Title level={4}>{t("home.title")}</Typography.Title>
        <div className="w-full flex flex-wrap justify-center items-center text-center gap-6">
          <HomeCard
            title={"Total Banner"}
            value={slideStore.slideCount || 0}
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
            title={"Total Manager"}
            value={managementTeamStore.countManagementTeam || 0}
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
            title={"Total School Info"}
            value={studentStore.students.length || 0}
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
            title={"Total Category"}
            value={categoryStore.countCategory || 0}
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
          <HomeCard
            title={"Total Article"}
            value={articleStore.articleCount || 0}
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
          <HomeCard
            title={"Total Content"}
            value={contentStore.countContent || 0}
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
          <HomeCard
            title={"Total Users"}
            value={userStore.user.length || 0}
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
          {/* <HomeCard
            title={"Total Albums"}
            value={mediaStore.countMedia ? mediaStore.countMedia : 0}
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
          /> */}
        </div>
      </Space>
    </MainPage>
  );
};

export default observer(HomePage);
