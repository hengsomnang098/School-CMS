import { observer } from "mobx-react-lite";
import { Table, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
const StudentTable = () => {
  const { studentStore } = useStore();
  const { students, loading, handleEdit, handleDelete } = studentStore;
  const { t } = useTranslation("global");
  return (
    <div>
      <Table
        style={{
          height: "80vh",
          overflow: "auto",
          padding: 0,
        }}
        rowKey="id"
        dataSource={students}
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
            title: "name",
            dataIndex: "name",
          },
          {
            key: "description",
            title: "description",
            dataIndex: "description",
            responsive: ["sm"],
          },

          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            render: (value, item) => (
              <Space>
                <Button onClick={() => handleEdit(item)} type="primary">
                  {t("button.edit")}
                </Button>
                <Button
                  onClick={() => handleDelete(item)}
                  type="primary"
                  danger
                  loading={loading}
                >
                  {t("button.delete")}
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </div>
  );
};

export default observer(StudentTable);
