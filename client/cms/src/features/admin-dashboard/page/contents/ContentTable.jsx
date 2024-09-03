import { Table, Space, Button, Input, Select } from "antd";
import { truncate } from "../../../../app/api/config/helper";
import { useStore } from "../../../../app/stores/store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const { Option } = Select;
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
  const [statusFilter, setStatusFilter] = useState("");

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const filteredData = sortContentById.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (statusFilter ? item.status === statusFilter : true)
    );
  });
  return (
    <>
      <div className="flex flex-row gap-2 justify-start items-center text-center">
        <Input.Search
          placeholder="Search Content..."
          className="xl:w-56 my-5"
          onSearch={(value) => {
            setSearchText(value);
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Select
          placeholder="Select Status"
          className="xl:w-48"
          onChange={(value) => {
            setStatusFilter(value);
          }}
          allowClear
        >
          <Option value="PENDING">PENDING</Option>
          <Option value="PUBLISHED">PUBLISHED</Option>
        </Select>
      </div>
      <Table
        width="100%"
        rowKey="id"
        dataSource={filteredData}
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
            sorter: (a, b) => a.id - b.id,
            align: "center",
          },
          {
            key: "title",
            title: "Name title",
            dataIndex: "title",
            align: "center",
            sorter: (a, b) => a.title.localeCompare(b.title),
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
            sorter: (a, b) => a.description.localeCompare(b.description),
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
            sorter: (a, b) => a.article.name.localeCompare(b.article.name),
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
            sorter: (a, b) => a.status.localeCompare(b.status),
            render: (value, item) => (
              <Space>
                <Button
                  icon={
                    item.status == "PUBLISHED" ? (
                      <EyeOutlined />
                    ) : (
                      <EditOutlined />
                    )
                  }
                  className={
                    item.status === "PUBLISHED"
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }
                  loading={loading}
                  onClick={() => handleStatus(item)}
                >
                  {item.status == "PENDING" ? "PENDING" : "PUBLISHED"}
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
