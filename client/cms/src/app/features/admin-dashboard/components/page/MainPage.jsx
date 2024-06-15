/* eslint-disable react/prop-types */
import { Card, Spin } from "antd";
import { observer } from "mobx-react-lite";

const MainPage = ({ children, loading = false }) => {
  return (
    <>
      <Spin spinning={loading}>
        <Card>{children}</Card>
      </Spin>
    </>
  );
};

export default observer(MainPage);
