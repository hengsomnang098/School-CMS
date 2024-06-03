/* eslint-disable react/prop-types */
import { Card, Spin } from "antd";

const MainPage = ({ children, loading = false }) => {
  return (
    <>
      <Spin spinning={loading}>
        <Card>{children}</Card>
      </Spin>
    </>
  );
};

export default MainPage;
