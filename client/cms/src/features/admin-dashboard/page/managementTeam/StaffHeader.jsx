import { Typography, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
const { Title } = Typography;
const StaffHeader = () => {
  const { managementTeamStore } = useStore();
  const { handleClickNew } = managementTeamStore;
  const NameTitle = "Management Team";
  return (
    <>
      <Typography>
        <Title level={3}>{NameTitle}</Title>
      </Typography>
      <Space>
        <Button
          className="mb-4"
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </Space>
    </>
  );
};

export default observer(StaffHeader);
