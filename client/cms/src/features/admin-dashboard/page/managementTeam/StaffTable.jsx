import { Table, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const StaffTable = () => {
  const { managementTeamStore } = useStore();
  const {  loading, handleEdit, handleDelete,sortTeamById } =
    managementTeamStore;
  const { t } = useTranslation("global");
  return (
    <>
      <Table
        sName=" h-[80vh] overflow-auto p-0 m-0"
        rowKey="id"
        dataSource={sortTeamById}
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
            title: "Name",
            dataIndex: "name",
            align: "center",
          },
          {
            key: "bio",
            title: "Bio",
            dataIndex: "bio",
            responsive: ["sm"],
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
            key: "photoUrl",
            title: "Image",
            dataIndex: "photoUrl",
            responsive: ["sm"],
            align: "center",
            render: (value) => {
              return value != null && value != "" ? (
                <LazyLoadImage className="w-[40px] h-[40px]" src={value} />
              ) : (
                <div className=" w-[40px] h-[40px] bg-gray-400 rounded"></div>
              );
            },
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            align: "center",
            render: (value, item) => (
              <div className="flex flex-row gap-2 justify-center">
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
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default observer(StaffTable);
