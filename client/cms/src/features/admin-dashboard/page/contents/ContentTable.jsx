import { Table, Image, Space, Button } from "antd";
import { truncate } from "../../../../app/api/config/helper";
import { useStore } from "../../../../app/stores/store";
import { Link } from "react-router-dom";

const ContentTable = () => {
  const { contentStore } = useStore();
  const { content, handleClickDelete, handleClickEdit, loading } = contentStore;
  return (
    <div>
      <Table
        rowKey="id"
        dataSource={content}
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
            key: "title",
            title: "Name title",
            dataIndex: "title",
            render: (value) => {
              return truncate(value);
            },
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
            render: (value) => {
              return (
                <span dangerouslySetInnerHTML={{ __html: truncate(value) }} />
              );
            },
          },
          {
            key: "article",
            title: "Article Name",
            dataIndex: "article",
            responsive: ["sm"],
            render: (value) => {
              return value.name;
            },
          },
          {
            key: "mediaList",
            title: "Album",
            dataIndex: "mediaList",
            responsive: ["sm"],
            render: (value, item) => (
              <Space>
                {/* <Button
                  size="large"
                  // onClick={}
                  type="primary"
                >
                  Manage Images
                </Button> */}
                <Link to={`../dashboard/content/medias/${item.id}`}>
                  Manage Images
                </Link>
              </Space>
            ),
          },
          {
            key: "imageUrl",
            title: "Images ",
            dataIndex: "imageUrl",
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
                  onClick={() => handleClickEdit(item)}
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

export default ContentTable;
