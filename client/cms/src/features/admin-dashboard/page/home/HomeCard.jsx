import { Card, Layout, Space, Statistic } from "antd";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, value, icon }) => {
  return (
    <Layout>
      <Card className="md:w-[32vh] xl:ml-4 xl:w-[34vh] justify-center items-center text-center w-[40vh] sm:w-[50vh]">
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </Layout>
  );
};

export default HomeCard;
