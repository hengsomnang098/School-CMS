import { Typography, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
const ContentHeader = () => {
  const { contentStore } = useStore();
  const { handleClickNew } = contentStore;
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-wrap justify-between text-center items-center">
      <Title level={3}>{t("sidebar.content")}</Title>
      <Button
        icon={<PlusOutlined />}
        iconPosition="end"
        className="ml-5"
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

export default observer(ContentHeader);
