import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { request } from "../config/request";
import {
  setAccessToken,
  //  setRefreshToken,
  setUser,
} from "../config/helper";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    var username = values.username;
    var password = values.password;
    if (username == "" || password == "") {
      alert("Please fill in username or password!");
      return false;
    }
    var data = {
      Username: username, //099998888
      Password: password, //"123456"
    };
    const res = await request("auth/login", "post", data);
    if (res) {
      if (res.error) {
        alert(res.message);
      } else {
        // Login success
        setUser(res.user);
        setAccessToken(res.access_token);
        // setRefreshToken(request.refresh_token);
        navigate("/");
        console.log(res.user);
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
          name="username"
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
