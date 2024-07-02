import { observer } from "mobx-react-lite";
import { Typography, Space, Button } from "antd";

import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const { Title } = Typography;

const ImageHeader = () => {
  const { mediaStore } = useStore();
  const { handleClickNew } = mediaStore;
  const { t } = useTranslation("global");
  return (
    <div className="mb-5">
      <Typography>
        <Title level={3}>{t("sidebar.albums")}</Title>
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
        <Link to="/dashboard/content">
          <Button>Back To Content</Button>
        </Link>
      </Space>
    </div>
  );
};

export default observer(ImageHeader);
