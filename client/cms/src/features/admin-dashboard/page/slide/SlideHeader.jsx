import { Typography, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const SlideHeader = () => {
  const { slideStore } = useStore();
  const { handleClickNew } = slideStore;
  const { t } = useTranslation("global");
  return (
    <div>
      <Typography>
        <Title level={3}>{t("sidebar.banner")}</Title>
      </Typography>

      <Space>
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          New
        </Button>
      </Space>
    </div>
  );
};

export default SlideHeader;
