import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, value, icon, to }) => {
  return (
    <Link to={to}>
      <Card
        hoverable
        className="flex flex-col md:w-[32vh] xl:w-[35vh] justify-center items-center text-center w-[40vh] sm:w-[50vh] overflow-auto "
        style={{ backgroundColor: "transparent" }} // Set background to transparent
      >
        <div className="text-4xl mb-2">{icon}</div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-2xl">{value}</div>
      </Card>
    </Link>
  );
};

export default observer(HomeCard);
