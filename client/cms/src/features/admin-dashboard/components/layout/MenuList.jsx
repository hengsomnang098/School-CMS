import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getRoles } from "../../../../app/api/config/helper";

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
  getItem("Manage Staffs", "/dashboard/staff", <TeamOutlined />),
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
        ]),
      ]
    : ""),
  // // ----------------------------
  // getItem("Logout", "logout", <DesktopOutlined />),
];

// eslint-disable-next-line react/prop-types
function MenuList() {
  const navigate = useNavigate();
  const onClickMenu = (event) => {
    navigate(event.key);
  };
  return (
    <>
      <Menu
        className="flex flex-col gap-[15px] text-base h-full overflow-auto bg-white xl:h-[93vh]"
        width="100%"
        style={{
          overflow: "auto",
          padding: 0,
        }}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        responsive={"true"}
        onClick={onClickMenu}
      />
    </>
  );
}

export default MenuList;
