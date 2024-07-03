import { Button, Space, Table, Tag } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const UserTable = () => {
  const { userStore } = useStore();
  const { user, handleEdit, handleStatus, loading } = userStore;
  const { t } = useTranslation("global");

  return (
    <div>
      <Table
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
        rowKey="id"
        dataSource={user}
        pagination={{
          pageSize: 10,
          // total: 100,
        }}
        // onChange={}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            // render: (value, item, index) => index + 1,
            responsive: ["sm"],
          },
          {
            key: "firstname",
            title: "Firstname",
            dataIndex: "firstname",
            responsive: ["sm"],
          },
          {
            key: "lastname",
            title: "Lastname",
            dataIndex: "lastname",
            responsive: ["sm"],
          },
          {
            key: "email",
            title: "Email",
            dataIndex: "email",
          },
          {
            key: "roles",
            title: "Roles",
            dataIndex: "roles",
            responsive: ["sm"],
          },
          {
            key: "Profile",
            title: "Profile",
            responsive: ["sm"],
            dataIndex: "profile",
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <LazyLoadImage src={value} width={40} height={30} />
                  </>
                );
              } else {
                return (
                  <div
                    style={{ height: 30, width: 40, backgroundColor: "#888" }}
                  ></div>
                );
              }
            },
          },
          {
            key: "status",
            title: "status",
            dataIndex: "status",
            responsive: ["md"],
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
            responsive: ["sm"],
            render: (value, item) => (
              <Space>
                <Button onClick={() => handleEdit(item)} type="primary">
                  {t("button.edit")}
                </Button>
                <Button
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
