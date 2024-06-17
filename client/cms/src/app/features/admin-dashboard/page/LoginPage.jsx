import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLogin } from "../../../api/config/helper";

const LoginPage = () => {
  const { userStore } = useStore();
  const { handleLogin } = userStore;

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    if (isLogin()) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const onFinish = (values) => {
    handleLogin(values)
      .then(() => {
        navigate("/dashboard");
        window.location.reload();
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed:", error);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col space-y-8  shadow-2xl rounded-3xl md:flex-row md:space-y-0 ">
          <Form
            name="normal_login"
            className="flex flex-col justify-center p-8 md:p-12 xl:w-[60vh]"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <img
              src="SISlogo2.png"
              alt=""
              className="w-20 mx-auto items-center justify-center text-center mb-2"
            />
            <span className="text-4xl font-bold text-center mb-4">Login</span>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              className="text-sm font-bold text-gray-600 flex flex-col my-5"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="w-full bg-green-700 text-white p-2 rounded-lg  hover:bg-white hover:text-black hover:border hover:border-gray-300"
                // loading={userStore.loading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className="relative">
            <img
              src="Login.jpg"
              alt="img"
              className="w-[60vh] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(LoginPage);
