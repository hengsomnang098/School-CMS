import { Table, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line react/prop-types
const CategoryTable = () => {
  const { t } = useTranslation("global");
  const { categoryStore } = useStore();
  const { handleClickEdit, categories, handleDelete } = categoryStore;
  return (
    <>
      <Table
        style={{
          height: "80vh",
          overflow: "auto",
          padding: 0,
        }}
        rowKey="id"
        dataSource={categories}
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
            key: "nameKh",
            title: "Name Khmer",
            dataIndex: "nameKh",
          },
          {
            key: "nameEn",
            title: "Name English",
            dataIndex: "nameEn",
            responsive: ["sm"],
          },

          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            render: (value, item) => (
              <Space>
                <Button onClick={() => handleClickEdit(item)} type="primary">
                  {t("button.edit")}
                </Button>
                <Button
                  onClick={() => handleDelete(item)}
                  type="primary"
                  danger
                >
                  {t("button.delete")}
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </>
  );
};

export default observer(CategoryTable);
