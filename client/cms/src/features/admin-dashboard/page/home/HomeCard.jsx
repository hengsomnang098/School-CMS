import { Card, Layout, Space, Statistic } from "antd";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, value, icon }) => {
  return (
    <Layout>
      <Card className="md:w-[32vh] xl:ml-4 xl:w-[35vh] w-[40vh] justify-center items-center text-center xl:gap-6 m-2">
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </Layout>
  );
};

export default HomeCard;
