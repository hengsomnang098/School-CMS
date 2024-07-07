import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
const StaffHeader = () => {
  const { managementTeamStore } = useStore();
  const { handleClickNew } = managementTeamStore;
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-row justify-between text-center items-center">
      <Typography>
        <Title level={3}>{t("sidebar.staff")}</Title>
      </Typography>
      <Button
        icon={<PlusOutlined />}
        iconPosition="end"
        className="mb-4"
        onClick={() => {
          handleClickNew();
        }}
        type="primary"
      >
        {t("button.add")}
      </Button>
    </div>
  );
};

export default observer(StaffHeader);
