import { Typography, Input, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { useStore } from "../../../../app/stores/store";

import { useTranslation } from "react-i18next";
import { PlusOutlined } from "@ant-design/icons";
import { getRoles } from "../../../../app/api/config/helper";

const UserHeader = () => {
  const { Title } = Typography;
  const { t } = useTranslation("global");
  const { userStore } = useStore();
  const { handleClickNew, getList } = userStore;

  const onChangeSearch = (e) => {
    // Update the current value of filterRef to the new search term
    filterRef.current.firstname = e.target.value;

    const roles = getRoles();
    if (roles.includes("ADMIN")) {
      // Pass the current value of firstname to getList
      getList(filterRef.current.firstname);
    } else {
      // Optionally, you can show a message or handle the case where the user doesn't have the required role
      getList("");
    }

    // Pass the current value of firstname to getList
  };

  const filterRef = useRef({
    firstname: "",
  });

  return (
    <>
      <div className="flex flex-wrap justify- text-center items-center gap-2 m-2">
        <Typography>
          <Title level={3}>{t("sidebar.users")}</Title>
        </Typography>
        <Input.Search
          allowClear
          onChange={onChangeSearch}
          placeholder="Name or Code"
          className="w-56"
        />
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

export default observer(UserHeader);
