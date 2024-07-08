import { observer } from "mobx-react-lite";
import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
const ArticleHeader = () => {
  const { articleStore } = useStore();
  const { handleClickNew } = articleStore;
  const { t } = useTranslation("global");
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between item-center text-center">
        <Typography>
          <Title level={3}>{t("sidebar.article")}</Title>
        </Typography>
        <Button
          icon={<PlusOutlined />}
          iconPosition="end"
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

export default observer(ArticleHeader);
