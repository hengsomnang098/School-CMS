import { Typography, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
const { Title } = Typography;
const ContentHeader = () => {
  const { contentStore } = useStore();
  const { handleClickNew } = contentStore;
  const { t } = useTranslation("global");
  return (
    <div>
      <Title level={3}>
        {t("sidebar.content")}
        <Button
          className="ml-5"
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          New
        </Button>
      </Title>
    </div>
  );
};

export default observer(ContentHeader);
