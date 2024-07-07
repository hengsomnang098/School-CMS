import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const CategoryHeader = () => {
  const { categoryStore } = useStore();
  const { handleClickNew } = categoryStore;
  const { t } = useTranslation("global");
  return (
    <>
      <Typography>
        <Title level={3}>{t("sidebar.category")}</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
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

export default observer(CategoryHeader);
