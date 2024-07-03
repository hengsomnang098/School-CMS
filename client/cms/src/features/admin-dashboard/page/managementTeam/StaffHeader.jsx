import { Typography, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
const { Title } = Typography;
const StaffHeader = () => {
  const { managementTeamStore } = useStore();
  const { handleClickNew } = managementTeamStore;
  const { t } = useTranslation("global");
  return (
    <>
      <Typography>
        <Title level={3}>{t("sidebar.staff")}</Title>
      </Typography>
      <Space>
        <Button
          className="mb-4"
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          {t("button.add")}
        </Button>
      </Space>
    </>
  );
};

export default observer(StaffHeader);
