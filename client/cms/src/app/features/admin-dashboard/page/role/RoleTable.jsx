import { Table, Space, Button } from "antd";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

const RoleTable = () => {
  const { roleStore } = useStore();
  const { roles, handleEdit, handleDelete, loading } = roleStore;
  return (
    <>
      <Table
        rowKey="id"
        dataSource={roles}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            responsive: ["sm"],
          },
          {
            key: "name",
            title: "Name Roles",
            dataIndex: "name",
          },

          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            render: (value, item) => (
              <Space>
                <Button
                  size="large"
                  onClick={() => handleEdit(item)}
                  type="primary"
                >
                  Edit
                </Button>
                <Button
                  size="large"
                  onClick={() => handleDelete(item)}
                  type="primary"
                  danger
                  loading={loading}
                >
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </>
  );
};

export default observer(RoleTable);
