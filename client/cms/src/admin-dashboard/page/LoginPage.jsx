import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { userStore } = useStore();
  const { handleLogin } = userStore;

  const navigate = useNavigate();

  const onFinish = (values) => {
    handleLogin(values)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed:", error);
      });
  };

  return (
    // <main classNameName="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
    //   <div classNameName="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
    //     <div>
    //       <Form name="normal_login" onFinish={onFinish}>
    //         <h1 classNameName="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //           Login
    //         </h1>

    //         <Form.Item
    //           classNameName="text-sm font-bold text-gray-600 mb-1 flex flex-col my-5"
    //           name="email"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your Username!",
    //             },
    //           ]}
    //         >
    //           <Input
    //             classNameName="border rounded-md bg-white px-3 py-2"
    //             prefix={<UserOutlined />}
    //             placeholder="Username"
    //           />
    //         </Form.Item>

    //         <Form.Item
    //           classNameName="text-sm font-bold text-gray-600 mb-1 flex flex-col my-5"
    //           name="password"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your Password!",
    //             },
    //           ]}
    //         >
    //           <Input
    //             classNameName="border rounded-md bg-white px-3 py-2"
    //             prefix={<LockOutlined />}
    //             type="password"
    //             placeholder="Password"
    //           />
    //         </Form.Item>

    //         <Form.Item>
    //           <Button
    //             size="large"
    //             type="primary"
    //             htmlType="submit"
    //             classNameName="w-full bg-green-500 text-white rounded-md p-2 my-5"
    //             loading={userStore.loading}
    //           >
    //             Log in
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //     </div>
    //     <div>image place</div>
    //   </div>
    // </main>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col space-y-8  shadow-2xl rounded-3xl md:flex-row md:space-y-0 ">
        <div className="flex flex-col justify-center p-8 md:p-12 xl:w-[60vh]">
          <img
            src="SISlogo2.png"
            alt=""
            className="w-20 mx-auto items-center justify-center text-center mb-2"
          />
          <span className="text-4xl font-bold text-center">Login</span>
          <div className="py-4">
            <span className="text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4 mb-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <button className="w-full bg-green-700 text-white p-2 rounded-lg  hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
          </button>
        </div>
        <div className="relative">
          <img
            src="Login.jpg"
            alt="img"
            className="w-[60vh] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default observer(LoginPage);
