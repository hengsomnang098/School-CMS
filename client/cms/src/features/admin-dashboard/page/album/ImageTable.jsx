import { Table, Image, Space, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { useParams } from "react-router-dom";
const ImageTable = () => {
  const { id } = useParams();
  const contentId = id;
  const { mediaStore } = useStore();
  const { medias, handleClickEdit, handleClickDelete, loading } = mediaStore;
  return (
    <div>
      <Table
        rowKey="id"
        dataSource={medias}
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
            key: "mediaType",
            title: "MediaType",
            dataIndex: "mediaType",
            responsive: ["sm"],
          },
          {
            key: "mediaUrl",
            title: "Image",
            dataIndex: "mediaUrl",
            responsive: ["sm"],
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <Image src={value} width={40} height={30} />
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
                <Button
                  size="large"
                  onClick={() => handleClickEdit(item, contentId)}
                  type="primary"
                >
                  Edit
                </Button>
                <Button
                  size="large"
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
