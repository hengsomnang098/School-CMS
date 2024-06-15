import { Table, Image, Button, Space } from "antd";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";
const StaffTable = () => {
  const { managementTeamStore } = useStore();
  const { managementTeam, loading, handleEdit, handleDelete } =
    managementTeamStore;
  return (
    <>
      <Table
        rowKey="id"
        dataSource={managementTeam}
        pagination={{
          pageSize: 5,
          // total: 100,
        }}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            // render: (value, item, index) => index + 1,
            responsive: ["sm"],
          },
          {
            key: "name",
            title: "Name",
            dataIndex: "name",
          },
          {
            key: "bio",
            title: "Bio",
            dataIndex: "bio",
            responsive: ["sm"],
          },
          {
            key: "description",
            title: "description",
            dataIndex: "description",
            responsive: ["sm"],
          },
          {
            key: "photoUrl",
            title: "Image",
            dataIndex: "photoUrl",
            responsive: ["sm"],
            render: (value) => {
              return value != null && value != "" ? (
                <Image src={value} width={40} height={30} />
              ) : (
                <div
                  style={{ height: 30, width: 40, backgroundColor: "#888" }}
                ></div>
              );
            },
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

export default observer(StaffTable);
