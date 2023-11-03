import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";

const Register = () => {
  // const params = useParams();
  const [username, usernamechange] = useState();
  const [password, passwordchange] = useState();
  const [confirm_password, confirm_passwordchange] = useState();

  const [email_id, email_idchange] = useState();
  const [customer_name, customer_namechange] = useState();
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("confirm_password", confirm_password);

    data.append("email_id", email_id);
    data.append("customer_name", customer_name);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://parkhyamapps.co.in/scott_shoot/api/a1/signUp",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("SuccessFull");
        // navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("falied " + error.message);
      });
  };

  return (
    <div>
      <h1 className="top-heading-section my-5">
        <span>Signup </span>
      </h1>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="formfield">
              <input
                value={customer_name}
                placeholder="Enter  Name"
                onChange={(e) => customer_namechange(e.target.value)}
                type="text"
                name=""
                required
                className="form-control"
              />
            </div>
            <div className="formfield">
              <input
                value={username}
                onChange={(e) => usernamechange(e.target.value)}
                type="text"
                name=""
                required
                placeholder="Enter Username"
                className="form-control"
              />
            </div>

            <div className="formfield">
              <input
                value={email_id}
                placeholder="Enter Email"
                onChange={(e) => email_idchange(e.target.value)}
                type="email"
                name=""
                required
                className="form-control"
              />
            </div>

            <div className="formfield">
              <input
                placeholder="Enter Password"
                value={password}
                onChange={(e) => passwordchange(e.target.value)}
                type="password"
                name=""
                required
                className="form-control"
              />
            </div>

            <div className="formfield">
              <input
                placeholder="Enter Confirm Password"
                value={confirm_password}
                onChange={(e) => confirm_passwordchange(e.target.value)}
                type="password"
                name=""
                required
                className="form-control"
              />
            </div>
            <div className="text-center mb-5">
              <Button variant="comman" type="sumbit" className="px-5">
                Submit
              </Button>

              <p className="already-acc my-5">
                If you have already account?{" "}
                <Link to="/login" className="login-link">
                  Please Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
