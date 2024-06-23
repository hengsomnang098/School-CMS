import { Table, Space, Button } from "antd";
import { truncate } from "../../../../app/api/config/helper";
import { useStore } from "../../../../app/stores/store";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContentTable = () => {
  const { contentStore } = useStore();
  const { handleClickDelete, handleClickEdit, loading, sortContentById } =
    contentStore;

  return (
    <div>
      <Table
        width="100%"
        rowKey="id"
        dataSource={sortContentById}
        className=" overflow-auto"
        pagination={{
          pageSize: 5,
          // showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
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
                    {/* <Image src={value} width={40} height={30} /> */}
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
