import { Table, Button } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const SlideTable = () => {
  const { t } = useTranslation("global");
  const { slideStore } = useStore();
  const { sortSlideById, handleEdit, handleDelete, loading } = slideStore;
  return (
    <>
      <Table
        className="h-[80vh] overflow-auto p-0 m-0"
        rowKey="id"
        dataSource={sortSlideById}
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
            sorter: (a, b) => a.id - b.id,
          },
          {
            key: "name",
            title: "Name",
            dataIndex: "name",
            align: "center",
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "imageUrl",
            title: "ImageUrl",
            dataIndex: "imageUrl",
            responsive: ["sm"],
            align: "center",
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <LazyLoadImage
                      className="flex flex-wrap justify-center items-center text-center w-16 "
                      src={value}
                    />
                  </>
                );
              } else {
                return (
                  <div className=" w-[40px] h-[30px] bg-gray-200 rounded"></div>
                );
              }
            },
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            align: "center",
            render: (value, item) => (
              <div className="flex felx-row gap-2 justify-center">
                <Button
                  iconPosition="end"
                  icon={<PlusOutlined />}
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

export default SlideTable;
