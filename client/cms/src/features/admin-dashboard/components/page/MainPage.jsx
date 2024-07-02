/* eslint-disable react/prop-types */
import { Card, Spin } from "antd";
import { observer } from "mobx-react-lite";

const MainPage = ({ children, loading = false }) => {
  return (
    <>
      <Spin tip="Loading..." size="large" spinning={loading}>
        <Card className={loading ? "blur-background" : ""}>{children}</Card>
      </Spin>
    </>
  );
};

export default observer(MainPage);
