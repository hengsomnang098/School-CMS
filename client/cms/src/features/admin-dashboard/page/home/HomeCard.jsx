import { Card, Layout, Space, Statistic } from "antd";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, value, icon }) => {
  return (
    <Layout>
      <Card className="overflow-auto xl:w-80 w-96">
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </Layout>
  );
};

export default HomeCard;
