import { Card, Layout, Space, Statistic } from "antd";
import { observer } from "mobx-react-lite";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, value, icon }) => {
  return (
    <Layout>
      <Card
        className="md:w-[32vh] xl:w-[37vh] justify-center items-center text-center w-[40vh] sm:w-[50vh] overflow-auto"
        style={{ backgroundColor: "transparent" }} // Set background to transparent
      >
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </Layout>
  );
};

export default observer(HomeCard);
