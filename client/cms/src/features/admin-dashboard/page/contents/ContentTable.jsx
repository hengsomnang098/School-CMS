import { Table, Space, Button, Input } from "antd";
import { truncate } from "../../../../app/api/config/helper";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const ContentTable = () => {
  const { contentStore } = useStore();
  const {
    handleClickDelete,
    handleClickEdit,
    loading,
    sortContentById,
    handleStatus,
  } = contentStore;
  const { t } = useTranslation("global");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };
  return (
    <>
      <Input.Search
        placeholder="Search Content..."
        className="xl:w-96 my-5"
        onSearch={(value) => {
          setSearchText(value);
        }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
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
            title: "Id",
            dataIndex: "id",
            responsive: ["sm"],
            align: "center",
          },
          {
            key: "title",
            title: "Name title",
            dataIndex: "title",
            align: "center",
            filteredValue: [searchText],
            onFilter: (value, record) => {
              return record.title.toLowerCase().includes(value.toLowerCase());
            },
            render: (value) => {
              return truncate(value);
            },
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
            align: "center",
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
            align: "center",
            render: (value) => {
              return value.name;
            },
          },
          {
            key: "thumbnail",
            title: "Images ",
            dataIndex: "thumbnail",
            responsive: ["sm"],
            align: "center",
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <LazyLoadImage className="w-[40px] h-[40px]" src={value} />
                  </>
                );
              } else {
                return <div className="w-[40px] h-[40px] bg-gray-600"></div>;
              }
            },
          },
          {
            key: "manage-albums",
            title: "Manage Albums",
            dataIndex: "manage-albums",
            align: "center",
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
            align: "center",
            render: (value, item) => (
              <Space>
                <Button
                  icon={
                    item.status == "DRAFT" ? <EyeOutlined /> : <EditOutlined />
                  }
                  className="bg-cyan-300 text-white"
                  loading={loading}
                  onClick={() => handleStatus(item)}
                >
                  {item.status == "DRAFT" ? "PUBLISHED" : "DRAFT"}
                </Button>
              </Space>
            ),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "action",
            align: "center",
            render: (value, item) => (
              <div className="flex flex-row gap-2">
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
                  onClick={() => handleClickDelete(item)}
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

export default ContentTable;
