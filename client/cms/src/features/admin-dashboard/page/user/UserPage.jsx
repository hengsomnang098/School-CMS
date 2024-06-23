import { useEffect, useRef } from "react";
import {
  Table,
  Button,
  Space,
  Modal,
  Input,
  Form,
  Image,
  Tag,
  Typography,
  Select,
} from "antd";
import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { LazyLoadImage } from "react-lazy-load-image-component";

const { Title } = Typography;
const UserPage = () => {
  const { userStore, roleStore } = useStore();

  const {
    getList,
    user,
    formValues,
    loading,
    open,
    handleFinish,
    filePreview,
    handleEdit,
    handleClickNew,
    handleCloseModal,
    handleStatus,
    handleClearImage,
    handleChangeImage,
  } = userStore;

  const [formCat] = Form.useForm();
  const fileRef = useRef(null);

  const filterRef = useRef({
    firstname: "",
  });

  useEffect(() => {
    formCat.setFieldsValue(formValues);
    roleStore.roleList();
    getList("");
  }, [formCat, formValues, getList, roleStore]);

  const onChangeSearch = (e) => {
    // Update the current value of filterRef to the new search term
    filterRef.current.firstname = e.target.value;

    // Pass the current value of firstname to getList
    getList(filterRef.current.firstname);
  };

  return (
    <MainPage loading={loading}>
      <Typography>
        <Title level={3}>Manage Users </Title>
      </Typography>
      <Space>
        <Input.Search
          allowClear
          onChange={onChangeSearch}
          placeholder="Name or Code"
          size="large"
          className="2xl:w-96"
        />
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </Space>

      <Table
        rowKey="id"
        dataSource={user}
        pagination={{
          pageSize: 10,
          // total: 100,
        }}
        // onChange={}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            // render: (value, item, index) => index + 1,
            responsive: ["sm"],
          },
          {
            key: "firstname",
            title: "Firstname",
            dataIndex: "firstname",
            responsive: ["sm"],
          },
          {
            key: "lastname",
            title: "Lastname",
            dataIndex: "lastname",
            responsive: ["sm"],
          },
          {
            key: "email",
            title: "Email",
            dataIndex: "email",
            // responsive: ["sm"],
          },
          {
            key: "roles",
            title: "Roles",
            dataIndex: "roles",
            responsive: ["sm"],
          },
          {
            key: "Profile",
            title: "Profile",
            responsive: ["sm"],
            dataIndex: "profile",
            render: (value) => {
              if (value != null && value != "") {
                console.log(value);
                return (
                  <>
                    {/* <Image
                      //  src={item.mediaUrl}
                      src={value}
                      width={40}
                      height={30}
                    /> */}
                    <LazyLoadImage src={value} width={40} height={30} />
                  </>
                );
              } else {
                return (
                  <div
                    style={{ height: 30, width: 40, backgroundColor: "#888" }}
                  ></div>
                );
              }
            },
          },
          {
            key: "status",
            title: "status",
            dataIndex: "status",
            responsive: ["md"],
            render: (value) =>
              value == "ACTIVE" ? (
                <Tag color="green">ACTIVE</Tag>
              ) : (
                <Tag color="red">INACTIVIED</Tag>
              ),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Action",
            responsive: ["sm"],
            render: (value, item) => (
              <Space>
                <Button
                  size="large"
                  onClick={() => handleEdit(item)}
                  type="primary"
                >
                  Edit
                </Button>
                <Button
                  size="large"
                  onClick={() => handleStatus(item)}
                  type="primary"
                  danger
                  loading={loading}
                >
                  {item.status == "ACTIVE" ? "Inactive" : "Active"}
                </Button>
              </Space>
            ),
          },
        ]}
      />
      <Modal
        forceRender
        title={formValues.id == null ? "New Users" : "Update Users"}
        open={open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form
          name="registerForm"
          form={formCat}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Frist Name"
            name={"firstName"}
            rules={[
              {
                required: true,
                message: "Please input Frist Name!",
              },
            ]}
          >
            <Input placeholder="Frist Name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name={"lastName"}
            rules={[
              {
                required: true,
                message: "Please input Last Name!",
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please input Email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          {formCat.getFieldValue("id") == null ? (
            <Form.Item
              label="Password"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Please input Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          ) : (
            <></>
          )}
          <Form.Item
            label="Roles Name"
            name={"roles"}
            // rules={[
            //   {
            //     required: true,
            //     message: "Please Select Roles!",
            //   },
            // ]}
          >
            <Select
              placeholder="Select Roles"
              showSearch
              optionFilterProp="label"
            >
              {roleStore.roles ? (
                roleStore.roles.map((item, index) => (
                  <Select.Option
                    label={item.name}
                    key={index}
                    value={item.name}
                  >
                    {item.name}
                  </Select.Option>
                ))
              ) : (
                <></>
              )}
            </Select>
          </Form.Item>

          {formValues.id != null ? (
            <>
              <Form.Item label="Image" name={"profile"}>
                <Image
                  // src={list.mediaUrl}
                  src={
                    filePreview
                      ? filePreview
                      : "data:image/png;base64,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"
                  }
                  className="w-full"
                />
              </Form.Item>
              <input
                ref={fileRef}
                type="file"
                onChange={handleChangeImage}
                src={filePreview}
              />
              <Button onClick={handleClearImage}>Clear Image</Button>
            </>
          ) : (
            <></>
          )}

          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {formValues.id == null ? "Save" : "Update"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </MainPage>
  );
};

export default observer(UserPage);
