import { Card, Skeleton } from "antd";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useStore } from "../../../../app/stores/store";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ title, value, icon, to, menukey, loading }) => {
  const { cardStore } = useStore();

  const handleClick = () => {
    cardStore.selectKey(menukey); // Update the store with the selected card
  };

  return (
    <Link to={to} onClick={handleClick}>
      <Card
        loading={loading}
        hoverable
        className="flex flex-col justify-center items-center text-center w-full sm:w-[50vh] md:w-[40vh] lg:w-[35vh] xl:w-[30vh] 2xl:w-[25vh] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24"
      >
        <Skeleton loading={loading} active icon>
          <div className="text-4xl mb-2">{icon}</div>
          <div className="text-xl font-bold">{title}</div>
          <div className="text-2xl">{value}</div>
        </Skeleton>
      </Card>
    </Link>
  );
};

export default observer(HomeCard);
