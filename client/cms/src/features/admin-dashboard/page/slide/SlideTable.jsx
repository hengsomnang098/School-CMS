import {
  Table,
  Space,
  Button,
  //  Image
} from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const SlideTable = () => {
  const { t } = useTranslation("global");
  const { slideStore } = useStore();
  const { slides, handleEdit, handleDelete, loading } = slideStore;
  return (
    <>
      <Table
        style={{
          height: "80vh",
          overflow: "auto",
          padding: 0,
        }}
        rowKey="id"
        dataSource={slides}
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
            title: "Name",
            dataIndex: "name",
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
          },
          {
            key: "imageUrl",
            title: "ImageUrl",
            dataIndex: "imageUrl",
            responsive: ["sm"],
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    {/* <Image
                      //  src={item.mediaUrl}
                      src={value}
                      width={40}
                      height={30}
                    /> */}
                    <LazyLoadImage src={value} width={40} height={30} />
                  </>
                );
              } else {
                return (
                  <div
                    style={{ height: 30, width: 40, backgroundColor: "#888" }}
                  ></div>
                );
              }
            },
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
    </>
  );
};

export default SlideTable;
