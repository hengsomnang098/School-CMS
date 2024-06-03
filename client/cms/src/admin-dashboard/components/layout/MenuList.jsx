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
  getItem("Dashboard", "/", <AppstoreAddOutlined />),
  getItem("Content", "content", <TeamOutlined />),
  getItem("Artcle", "article", <TeamOutlined />),
  getItem("Category", "category", <TeamOutlined />),
  getItem("About us", "about", <ShopOutlined />),
  getItem("Contact Us", "contact", <ShopOutlined />),
  // getItem("Product", "Product", <ProductOutlined />, [
  //   getItem("Product", "product", <ProductOutlined />),
  //   getItem("Product-stock", "product-stock"),
  //   getItem("Category", "category"),
  // ]),
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
    <Menu
      theme={darktheme ? "dark" : "light"}
      className=" h-[88vh] mt-8 flex flex-col gap-[15px] text-base relative-to"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
      onClick={onClickMenu}
    />
  );
}

export default MenuList;
