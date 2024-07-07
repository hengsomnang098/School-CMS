import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  getMenuKey,
  getRoles,
  logout,
  setMenuKey,
} from "../../../../app/api/config/helper";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function MenuList() {
  const { t } = useTranslation("global");
  const roles = getRoles();

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
    ...(roles.includes("SUPER-ADMIN") || roles.includes("ADMIN")
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

  const navigate = useNavigate();
  const onClickMenu = (event) => {
    if (event.key === "logout") {
      logout();
    }
    setMenuKey(event.key);
    navigate(getMenuKey());
  };
  return (
    <>
      <Menu
        className="flex flex-col gap-[15px] text-base h-full w-full overflow-auto bg-bg-main-color text-white justify-start"
        mode="inline"
        defaultSelectedKeys={getMenuKey()}
        items={items}
        responsive={"true"}
        onClick={onClickMenu}
      />
    </>
  );
}

export default MenuList;
