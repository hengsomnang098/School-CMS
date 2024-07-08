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
      <div className="flex flex-wrap justify-between text-center items-center">
        <Typography>
          <Title level={3}>{t("sidebar.category")}</Title>
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

export default observer(CategoryHeader);
