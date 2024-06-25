import { observer } from "mobx-react-lite";
import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
const { Title } = Typography;
const ArticleHeader = () => {
  const { articleStore } = useStore();
  const { handleClickNew } = articleStore;
  return (
    <div>
      <Typography>
        <Title level={3}>Manage Article</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          New
        </Button>
      </div>
    </div>
  );
};

export default observer(ArticleHeader);
