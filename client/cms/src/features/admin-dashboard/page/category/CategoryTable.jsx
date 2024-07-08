import { Table, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// eslint-disable-next-line react/prop-types
const CategoryTable = () => {
  const { t } = useTranslation("global");
  const { categoryStore } = useStore();
  const { handleClickEdit, categories, handleDelete } = categoryStore;
  return (
    <>
      <Table
        className=" overflow-auto p-0 m-0 h-full"
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
            align: "center",
          },
          {
            key: "nameKh",
            title: "Name Khmer",
            dataIndex: "nameKh",
            align: "center",
          },
          {
            key: "nameEn",
            title: "Name English",
            dataIndex: "nameEn",
            responsive: ["sm"],
            align: "center",
          },

          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            align: "center",
            render: (value, item) => (
              <div className="flex flex-wrap gap-2 justify-center items-center text-center">
                <Button
                  icon={<EditOutlined />}
                  iconPosition="end"
                  onClick={() => handleClickEdit(item)}
                  type="primary"
                >
                  {t("button.edit")}
                </Button>
                <Button
                  iconPosition="end"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(item)}
                  type="primary"
                  danger
                >
                  {t("button.delete")}
                </Button>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default observer(CategoryTable);
