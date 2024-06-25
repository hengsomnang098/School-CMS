import { Typography, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
const { Title } = Typography;
const ContentHeader = () => {
  const NameTitle = "Manage Content";
  const { contentStore } = useStore();
  const { handleClickNew } = contentStore;
  return (
    <div>
      <Title level={3}>
        {NameTitle}
        <Button
          className="ml-5"
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          New
        </Button>
      </Title>
    </div>
  );
};

export default observer(ContentHeader);
