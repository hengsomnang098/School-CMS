import {
  AppstoreAddOutlined,
  DesktopOutlined,
  // ProductOutlined,
  ShopOutlined,
  TeamOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../config/helper";

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
  getItem("Manage Category", "/dashboard/category", <TeamOutlined />),
  getItem("Manage Artcle", "/dashboard/article", <TeamOutlined />),
  getItem("Manage Content", "/dashboard/content", <TeamOutlined />),
  getItem("Employee", "employee", <TeamOutlined />, [
    getItem("Manage Users", "/dashboard/users", <TeamOutlined />),
    getItem("Manage Role", "/dashboard/roles", <TeamOutlined />),
  ]),
  getItem("About us", "/dashboard/about", <ShopOutlined />),
  getItem("Contact Us", "/dashboard/contact", <ShopOutlined />),
  // getItem("System", "system", <UserOutlined />, [
  //   getItem("Order Status", "order-status"),
  //   getItem("Payment method", "payment-method"),
  //   getItem("Role", "role"),
  // ]),
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
        className="mt-8 flex flex-col gap-[15px] text-base"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={onClickMenu}
      />
    </>
  );
}

export default MenuList;
