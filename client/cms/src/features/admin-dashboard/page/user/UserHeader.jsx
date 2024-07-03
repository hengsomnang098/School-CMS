import { Typography, Space, Input, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStore } from "../../../../app/stores/store";

import { useTranslation } from "react-i18next";

const UserHeader = () => {
  const { Title } = Typography;
  const { t } = useTranslation("global");
  const { userStore } = useStore();
  const { handleClickNew, getList } = userStore;

  const onChangeSearch = (e) => {
    // Update the current value of filterRef to the new search term
    filterRef.current.firstname = e.target.value;

    // Pass the current value of firstname to getList
    getList(filterRef.current.firstname);
  };

  const filterRef = useRef({
    firstname: "",
  });

  return (
    <div>
      <Typography>
        <Title level={3}>{t("sidebar.users")}</Title>
      </Typography>
      <Space>
        <Input.Search
          allowClear
          onChange={onChangeSearch}
          placeholder="Name or Code"
          className="2xl:w-96"
        />
        <Button
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

export default observer(UserHeader);
