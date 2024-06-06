import { Form } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../config/request";
const ImagePage = () => {
  const [list, setList] = useState([]);
  const { contentId } = useParams();
  const [formCat] = Form.useForm();
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formCat]);

  const getList = async () => {
    const res = await request(`medias/content/${Number(contentId)}`, "get");
    console.log(res);
    if (res) {
      setList(res);
    }
  };
  return <div>hello</div>;
};

export default ImagePage;
