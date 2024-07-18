import { observer } from "mobx-react-lite";
import { Table, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const StudentTable = () => {
  const { studentStore } = useStore();
  const { sortstudenById, loading, handleEdit, handleDelete } = studentStore;
  const { t } = useTranslation("global");
  return (
    <div>
      <Table
        className=" h-[80vh] overflow-auto p-0 m-0"
        rowKey="id"
        dataSource={sortstudenById}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            key: "id",
            title: "Id",
            dataIndex: "id",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "name",
            title: "name",
            dataIndex: "name",
            align: "center",
          },
          {
            key: "description",
            title: "description",
            dataIndex: "description",
            responsive: ["sm"],
            align: "center",
          },

          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
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
                  icon={<DeleteOutlined />}
                  iconPosition="end"
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
