import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
const { Title } = Typography;

const StudentHeader = () => {
  const { studentStore } = useStore();
  const { handleClickNew } = studentStore;
  const { t } = useTranslation("global");
  return (
    <>
      <Typography>
        <Title level={3}>{t("sidebar.student")}</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          {t("button.add")}
        </Button>
      </div>
    </>
  );
};

export default observer(StudentHeader);
