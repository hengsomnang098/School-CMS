import { Table, Space, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ImageTable = () => {
  const { mediaStore } = useStore();
  const { medias, handleClickDelete, loading } = mediaStore;
  return (
    <div>
      <Table
        rowKey="id"
        dataSource={medias}
        style={{
          height: "80vh",
          overflow: "auto",
          padding: 0,
        }}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
          },

          {
            key: "url",
            title: "Image",
            dataIndex: "url",
            responsive: ["sm"],
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
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
                {/* <Button
                  onClick={() => handleClickEdit(item, contentId)}
                  type="primary"
                >
                  Edit
                </Button> */}
                <Button
                  onClick={() => handleClickDelete(item)}
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
    </div>
  );
};

export default observer(ImageTable);
