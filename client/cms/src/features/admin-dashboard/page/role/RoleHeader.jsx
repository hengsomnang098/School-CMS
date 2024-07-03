import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const RoleHeader = () => {
  const { roleStore } = useStore();
  const { handleClickNew } = roleStore;

  const { Title } = Typography;
  const { t } = useTranslation("global");
  return (
    <>
      <Typography>
        <Title level={3}>{t("sidebar.roles")}</Title>
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

export default observer(RoleHeader);
