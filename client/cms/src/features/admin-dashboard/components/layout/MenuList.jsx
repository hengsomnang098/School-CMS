import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getRoles, logout } from "../../../../app/api/config/helper";

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
  getItem("Dashboard", "/dashboard", <AppstoreAddOutlined />),
  getItem("Manage Banners", "/dashboard/manage-banners", <AppstoreOutlined />),
  getItem("Manage Student", "/dashboard/student", <AppstoreOutlined />),
  getItem("Manage Category", "/dashboard/category", <TeamOutlined />),
  getItem("Manage Artcle", "/dashboard/article", <TeamOutlined />),
  getItem("Manage Content", "/dashboard/content", <TeamOutlined />),

  // need Permission to render
  ...(roles.includes("SUPER-ADMIN") || roles.includes("ADMIN")
    ? [
        getItem("Employee", "employee", <TeamOutlined />, [
          getItem("Users", "/dashboard/users", <TeamOutlined />),
          getItem("Roles", "/dashboard/roles", <TeamOutlined />),
          getItem("Staffs", "/dashboard/staff", <TeamOutlined />),
        ]),
      ]
    : ""),
  // ----------------------------
  getItem("Logout", "logout", <DesktopOutlined />),
];

// eslint-disable-next-line react/prop-types
function MenuList({ darktheme }) {
  const navigate = useNavigate();
  const onClickMenu = (event) => {
    if (event.key == "logout") {
      logout();
      return;
    }
    navigate(event.key);
  };
  return (
    <>
      <Menu
        theme={darktheme ? "dark" : "light"}
        className="mt-8 flex flex-col gap-[15px] text-base h-full overflow-auto"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={onClickMenu}
      />
    </>
  );
}

export default MenuList;
