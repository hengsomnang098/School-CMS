import { Button, Space, Table, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import {
  EditOutlined,
  PlayCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

const UserTable = () => {
  const { userStore } = useStore();
  const { user, handleEdit, handleStatus, loading } = userStore;
  const { t } = useTranslation("global");

  return (
    <div>
      <Table
        className="w-full h-full overflow-auto"
        rowKey="id"
        dataSource={user}
        pagination={{
          pageSize: 10,
        }}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "firstname",
            title: "Firstname",
            dataIndex: "firstname",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "lastname",
            title: "Lastname",
            dataIndex: "lastname",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "email",
            title: "Email",
            dataIndex: "email",
            align: "center",
          },
          {
            key: "roles",
            title: "Roles",
            dataIndex: "roles",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "Profile",
            title: "Profile",
            responsive: ["sm"],
            dataIndex: "profile",
            align: "center",
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <LazyLoadImage className="w-[40px] h-[40px]" src={value} />
                  </>
                );
              } else {
                return <div className="w-[40px] h-[40px] bg-gray-400"></div>;
              }
            },
          },
          {
            key: "status",
            title: "status",
            dataIndex: "status",
            responsive: ["md"],
            align: "center",
            render: (value) =>
              value == "ACTIVE" ? (
                <Tag color="green">ACTIVE</Tag>
              ) : (
                <Tag color="red">INACTIVIED</Tag>
              ),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Action",
            align: "center",
            render: (value, item) => (
              <Space>
                <Button
                  icon={<EditOutlined />}
                  iconPosition="end"
                  onClick={() => handleEdit(item)}
                  type="primary"
                >
                  {t("button.edit")}
                </Button>
                <Button
                  icon={
                    item.status == "ACTIVE" ? (
                      <StopOutlined />
                    ) : (
                      <PlayCircleOutlined />
                    )
                  }
                  iconPosition="end"
                  onClick={() => handleStatus(item)}
                  type="primary"
                  danger
                  loading={loading}
                >
                  {item.status == "ACTIVE" ? "Inactive" : "Active"}
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </div>
  );
};

export default observer(UserTable);
