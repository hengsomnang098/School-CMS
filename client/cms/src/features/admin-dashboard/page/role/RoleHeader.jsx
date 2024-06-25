import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";

const RoleHeader = () => {
  const { roleStore } = useStore();
  const { handleClickNew } = roleStore;

  const { Title } = Typography;
  const NameTitle = "Manage Roles";
  return (
    <>
      <Typography>
        <Title level={3}>{NameTitle}</Title>
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
    </>
  );
};

export default observer(RoleHeader);
