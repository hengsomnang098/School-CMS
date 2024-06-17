import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const CategoryHeader = () => {
  const { categoryStore } = useStore();
  const { handleClickNew } = categoryStore;
  return (
    <>
      <Typography>
        <Title level={3}>Manage Category</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </div>
    </>
  );
};

export default observer(CategoryHeader);
