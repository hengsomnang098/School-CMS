import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { request } from "../../config/request";
import {
  setAccessToken,
  setRoles,
  //  setRefreshToken,
  setUser,
} from "../../config/helper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
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
        setLoading(false);
      } else {
        // Login success
        setUser(res.object.email);
        setAccessToken(res.object.token);
        // setRefreshToken(request.refresh_token);
        setRoles(res.object.roles);

        navigate("/dashboard");
        window.location.reload();
        // console.log(res.user);
      }
      setLoading(false);
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
          <Button type="primary" htmlType="submit" setLoading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
