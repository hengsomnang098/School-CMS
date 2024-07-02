import { Table, Space, Button } from "antd";
import { truncate } from "../../../../app/api/config/helper";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContentTable = () => {
  const { contentStore } = useStore();
  const {
    handleClickDelete,
    handleClickEdit,
    loading,
    sortContentById,
    handleStatus,
  } = contentStore;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };
  return (
    <>
      <Table
        width="100%"
        rowKey="id"
        dataSource={sortContentById}
        className=" overflow-auto justify-start"
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
          showQuickJumper: true,
        }}
        onChange={handleTableChange}
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
            key: "thumbnail",
            title: "Images ",
            dataIndex: "thumbnail",
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
            key: "manage-albums",
            title: "Manage Albums",
            dataIndex: "manage-albums",
            render: (value, item) => (
              <Space>
                <Link to={`/dashboard/content/albums/${item.id}`}>
                  Manage Albums
                </Link>
              </Space>
            ),
          },
          {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (value, item) => (
              <Space>
                <Button loading={loading} onClick={() => handleStatus(item)}>
                  {item.status == "DRAFT" ? "DRAFT" : "PUBLISHED"}
                </Button>
              </Space>
            ),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "action",
            render: (value, item) => (
              <Space>
                <Button onClick={() => handleClickEdit(item)} type="primary">
                  Edit
                </Button>
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
    </>
  );
};

export default ContentTable;
