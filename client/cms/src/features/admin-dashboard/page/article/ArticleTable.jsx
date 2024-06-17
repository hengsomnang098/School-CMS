import { Table, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
const ArticleTable = () => {
  const { articleStore } = useStore();
  const { articles, handleClickEdit, handleDelete, loading } = articleStore;
  return (
    <>
      <Table
        rowKey="id"
        dataSource={articles}
        pagination={{
          pageSize: 5,
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
            key: "name",
            title: "Name Article",
            dataIndex: "name",
          },
          {
            key: "category",
            title: "Category Name",
            dataIndex: "category",
            responsive: ["sm"],
            render: (value) => {
              return value.nameEn;
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
                  onClick={() => handleClickEdit(item)}
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

export default observer(ArticleTable);
