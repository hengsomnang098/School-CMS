import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getRoles, logout } from "../../../../app/api/config/helper";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";

// eslint-disable-next-line react/prop-types
function MenuList() {
  const { t } = useTranslation("global");
  const roles = getRoles();
  const navigate = useNavigate();
  const { cardStore } = useStore();

  const onClickMenu = (event) => {
    if (event.key === "logout") {
      logout();
    }
    cardStore.selectKey(event.key); // Update the store with the selected key
    navigate(event.key);
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(t("sidebar.dashboard"), "/dashboard", <AppstoreAddOutlined />),
    getItem(
      t("sidebar.banner"),
      "/dashboard/manage-banners",
      <AppstoreOutlined />
    ),
    getItem(t("sidebar.staff"), "/dashboard/staff", <TeamOutlined />),
    getItem(t("sidebar.student"), "/dashboard/student", <AppstoreOutlined />),
    getItem(t("sidebar.category"), "/dashboard/category", <TeamOutlined />),
    getItem(t("sidebar.article"), "/dashboard/article", <TeamOutlined />),
    getItem(t("sidebar.content"), "/dashboard/content", <TeamOutlined />),

    // need Permission to render
    ...(roles.includes("ADMIN")
      ? [
          getItem(t("sidebar.users"), "/dashboard/users", <TeamOutlined />),
          ...(roles.includes("SUPER-ADMIN")
            ? [
                getItem(
                  t("sidebar.roles"),
                  "/dashboard/roles",
                  <TeamOutlined />
                ),
              ]
            : []),
        ]
      : []),

    getItem(t("sidebar.logout"), "logout", <DesktopOutlined />),
  ];

  return (
    <>
      <Menu
        className="flex flex-col gap-[15px] text-base h-full w-full overflow-auto bg-bg-main-color text-white justify-start"
        mode="inline"
        defaultSelectedKeys={[cardStore.selectedKey]}
        selectedKeys={[cardStore.selectedKey]} // Use the store's selected key
        items={items}
        responsive={"true"}
        onClick={onClickMenu}
      />
    </>
  );
}

export default observer(MenuList);
