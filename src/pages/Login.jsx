import React from "react";
import { Form, Input } from "element-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: "",
      },
      title: "Login",
      rePasswordVisible: false,
      phoneVisible: false,
      buttonText: "Login",
      type: "Login",
      navigateText: "Register",
    };
  }
  render() {
    const _this = this;
    let rePasswordItem = null;
    if (_this.state.rePasswordVisible) {
      rePasswordItem = (
        <Form.Item label="comfirm password" labelWidth="80">
          <Input
            type={"password"}
            onChange={_this.changeInput.bind(_this, "rePassword")}
            value={_this.state.form.rePassword}
            style={{ width: "250px" }}
            placeholder="place confirm input password"
          ></Input>
        </Form.Item>
      );
    }
    let phoneItem = null;
    if (_this.state.phoneVisible) {
      phoneItem = (
        <Form.Item label="phone number" labelWidth="80">
          <Input
            value={_this.state.form.phone}
            onChange={_this.changeInput.bind(_this, "phone")}
            style={{ width: "250px" }}
            placeholder="place input phonenumber"
          ></Input>
        </Form.Item>
      );
    }
    return <div></div>;
  }
}
