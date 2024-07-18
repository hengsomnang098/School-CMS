import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const BreadCrumb = () => {
  const location = useLocation();

  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    const breadcrumbItems = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      return {
        key: name,
        title: isLast ? (
          capitalize(name)
        ) : (
          <Link to={routeTo}>{capitalize(name)}</Link>
        ),
      };
    });

    return <Breadcrumb className="font-bold m-4" items={breadcrumbItems} />;
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;