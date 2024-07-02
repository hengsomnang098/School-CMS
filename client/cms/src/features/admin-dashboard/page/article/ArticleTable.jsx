import { Table, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
const ArticleTable = () => {
  const { articleStore } = useStore();
  const { articles, handleClickEdit, handleDelete, loading } = articleStore;
  const { t } = useTranslation("global");
  return (
    <>
      <Table
        style={{
          height: "80vh",
          overflow: "auto",
          padding: 0,
        }}
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
                <Button onClick={() => handleClickEdit(item)} type="primary">
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
    </>
  );
};

export default observer(ArticleTable);
