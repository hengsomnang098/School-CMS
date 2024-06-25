import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
const { Title } = Typography;

const StudentHeader = () => {
  const NameTitle = "Manage Student";
  const { studentStore } = useStore();
  const { handleClickNew } = studentStore;
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

export default observer(StudentHeader);
