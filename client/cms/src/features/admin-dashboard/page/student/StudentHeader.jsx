import { Typography, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

const StudentHeader = () => {
  const { studentStore } = useStore();
  const { handleClickNew } = studentStore;
  const { t } = useTranslation("global");
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <Typography>
          <Title level={3}>{t("sidebar.student")}</Title>
        </Typography>
        <Button
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
    </>
  );
};

export default observer(StudentHeader);
