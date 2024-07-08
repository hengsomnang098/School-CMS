import { Typography } from "antd";
import HomeCard from "./HomeCard";
import {
  UserOutlined,
  PictureOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  AppstoreOutlined,
  PictureTwoTone,
} from "@ant-design/icons";
import MainPage from "../../components/page/MainPage";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { getRoles } from "../../../../app/api/config/helper";

const HomePage = () => {
  const { t } = useTranslation("global");
  const role = getRoles();
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
    <MainPage>
      <Typography.Title level={4}>{t("home.title")}</Typography.Title>
      <div className=" flex flex-wrap xl:justify-start justify-center  items-center text-center gap-4">
        <HomeCard
          loading={slideStore.loading}
          menukey={"/dashboard/manage-banners"}
          to="manage-banners"
          title={"Total Banner"}
          value={slideStore.slideCount || 0}
          icon={
            <PictureOutlined
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
          loading={managementTeamStore.loading}
          menukey={"/dashboard/staff"}
          to={"staff"}
          title={"Total Manager"}
          value={managementTeamStore.countManagementTeam || 0}
          icon={
            <UsergroupAddOutlined
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
          loading={studentStore.loading}
          menukey={"/dashboard/student"}
          to={"student"}
          title={"School Info"}
          value={studentStore.students ? studentStore.students.length : 0}
          icon={
            <IdcardOutlined
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
          loading={categoryStore.loading}
          menukey={"/dashboard/category"}
          to="category"
          title={"Total Category"}
          value={categoryStore.countCategory || 0}
          icon={
            <FolderOutlined
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
          loading={articleStore.loading}
          menukey={"/dashboard/article"}
          to="article"
          title={"Total Article"}
          value={articleStore.articleCount || 0}
          icon={
            <FolderOpenOutlined
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
          loading={contentStore.loading}
          menukey={"/dashboard/content"}
          to="content"
          title={"Total Content"}
          value={contentStore.countContent || 0}
          icon={
            <AppstoreOutlined
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
        {role.includes("ADMIN") ? (
          <HomeCard
            loading={userStore.loading}
            menukey={"/dashboard/users"}
            to="users"
            title={"Total Users"}
            value={userStore.user.length || 0}
            icon={
              <UserOutlined
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
        ) : null}
        <HomeCard
          // menukey={"/dashboard/users"}
          title={"Total Albums"}
          value={100}
          icon={
            <PictureTwoTone
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
      </div>
    </MainPage>
  );
};

export default observer(HomePage);
