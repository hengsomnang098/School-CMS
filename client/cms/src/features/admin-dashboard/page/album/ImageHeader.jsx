import { observer } from "mobx-react-lite";
import { Typography, Space, Button } from "antd";

import { useStore } from "../../../../app/stores/store";
import { useTranslation } from "react-i18next";
import {  PlusOutlined } from "@ant-design/icons";
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
          icon={<PlusOutlined />}
          iconPosition="end"
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
        >
          {t("button.add")}
        </Button>
      </Space>
    </div>
  );
};

export default observer(ImageHeader);
