import { Typography, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../stores/store";
const { Title } = Typography;
const ContentHeader = () => {
  const NameTitle = "Manage Content";
  const { contentStore } = useStore();
  const { handleClickNew } = contentStore;
  return (
    <div>
      <Typography>
        <Title level={3}>{NameTitle}</Title>
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
    </div>
  );
};

export default observer(ContentHeader);
