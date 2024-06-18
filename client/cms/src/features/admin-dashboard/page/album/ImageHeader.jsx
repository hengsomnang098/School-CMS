import { observer } from "mobx-react-lite";
import { Typography, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { useStore } from "../../../../app/stores/store";
const { Title } = Typography;

const ImageHeader = () => {
  const { mediaStore } = useStore();
  const { handleClickNew } = mediaStore;
  return (
    <div className="mb-5">
      <Typography>
        <Title level={3}>Manage Image</Title>
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

        <Link to="../dashboard/content/">
          <Button type="primary" size="large">
            Back to Content
          </Button>
        </Link>
      </Space>
    </div>
  );
};

export default observer(ImageHeader);
