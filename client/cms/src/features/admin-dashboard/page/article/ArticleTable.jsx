import { Table, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const ArticleTable = () => {
  const { articleStore } = useStore();
  const { sortByArticleId, handleClickEdit, handleDelete, loading } = articleStore;
  const { t } = useTranslation("global");
  return (
    <>
      <Table
        className="overflow-auto h-full w-full p-0 m-0"
        rowKey="id"
        dataSource={sortByArticleId}
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
            title: "Name Article",
            dataIndex: "name",
            align: "center",
          },
          {
            key: "category",
            title: "Category Name",
            dataIndex: "category",
            responsive: ["sm"],
            align: "center",
            render: (value) => {
              return value.nameEn;
            },
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
                  icon={<DeleteOutlined />}
                  iconPosition="end"
                  onClick={() => handleDelete(item)}
                  type="primary"
                  danger
                  loading={loading}
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

export default observer(ArticleTable);
