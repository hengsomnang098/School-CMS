import { Typography, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const SlideHeader = () => {
  const { slideStore } = useStore();
  const { handleClickNew } = slideStore;
  return (
    <div>
      <Typography>
        <Title level={3}>Manage Banner</Title>
      </Typography>

      <Space>
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </Space>
    </div>
  );
};

export default SlideHeader;
