import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { request } from "../../config/request";
import {
  setAccessToken,
  //  setRefreshToken,
  setUser,
} from "../../config/helper";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    var email = values.email;
    var password = values.password;
    if (email == "" || password == "") {
      alert("Please fill in email or password!");
      return false;
    }
    var data = {
      email: email, //099998888
      password: password, //"123456"
    };
    const res = await request("auth/login", "post", data);
    if (res) {
      if (res.error) {
        alert(res.message);
      } else {
        // Login success
        setUser(res.object.email);

        setAccessToken(res.token);
        // setRefreshToken(request.refresh_token);
        navigate("/dashboard");
        // console.log(res.user);
      }
    }
  };

  return (
    <div
      style={{
        width: 500,
        margin: "auto",
        marginTop: 100,
        backgroundColor: "#eee",
        padding: 30,
        borderRadius: 10,
      }}
    >
      <Form name="normal_login" onFinish={onFinish}>
        <h1>Login</h1>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
