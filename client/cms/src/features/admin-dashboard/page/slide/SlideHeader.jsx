import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const SlideHeader = () => {
  const { slideStore } = useStore();
  const { handleClickNew } = slideStore;
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-row justify-between items-center text-center">
      <Typography>
        <Title level={3}>{t("sidebar.banner")}</Title>
      </Typography>
      <Button
        className="my-3"
        iconPosition="end"
        icon={<PlusOutlined />}
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

export default SlideHeader;
