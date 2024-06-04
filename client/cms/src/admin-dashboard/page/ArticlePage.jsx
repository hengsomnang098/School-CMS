import {
  Table,
  //  Form
} from "antd";
import { useState, useEffect } from "react";
import { request } from "../../config/request";

const ArticlePage = () => {
  const [dataSource, setDataSource] = useState([]);
  // const [formCat] = Form.useForm();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("articles", "get");
    if (res) {
      const firstObject = res[0] || {};
      const cols = [];
      for (const key in firstObject) {
        var render = (value) => {
          return <span>{String(value)}</span>;
        };
        if (typeof firstObject[key] === "object") {
          render = (value) => {
            return (
              <span>
                {Object.keys(value).map((key) => {
                  return (
                    <div key={key}>
                      {key} : {value[key]}
                    </div>
                  );
                })}
              </span>
            );
          };
        }

        const col = {
          title: String(key).charAt(0).toUpperCase() + String(key).slice(1),
          dataIndex: key,
          render: render,
          // width: 150,
          // fixed: "left",
          ellipsis: true,
          // responsive: ["sm"],
        };
        cols.push(col);
      }
      setColumns(cols);
      setDataSource(res);
    }
  };

  return (
    <div>
      <Table
        rowKey={"id"}
        columns={columns}
        dataSource={dataSource}
        scroll={{ y: 500 }}
      />
    </div>
  );
};

export default ArticlePage;
