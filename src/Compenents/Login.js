import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";

import { google } from "./imgUrl";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email_id, setEmailId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    formData.append("email_id", email_id);

    try {
      const response = await axios.post(
        "https://parkhyamapps.co.in/scott_shoot/api/a1/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      console.log(response.data.user_data); // Log the response data

      if (response.data && response.data.Status === 1) {
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        localStorage.setItem("username", response.data.user_data.username); // Store username
        localStorage.setItem("customer_name", response.data.user_data.customer_name); // Store customer_name
        localStorage.setItem("email_id", response.data.user_data.email_id); // Store email_id

        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Login failed: Invalid email or password");
      }
    } catch (error) {
      console.log(error.response); // Log the error response from the server
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <div>
      <h1 className="top-heading-section my-5">
        <span>Login </span>
      </h1>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="formfield">
              <input
                value={email_id}
                placeholder="Enter Email"
                onChange={(e) => setEmailId(e.target.value)}
                type="email"
                name=""
                className="form-control"
              />
            </div>

            <div className="formfield">
              <input
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name=""
                className="form-control"
              />
            </div>

            <div className="text-center mb-5">
              <Button variant="comman" type="submit" className="px-5">
                Submit
              </Button>
              <div className="login-line my-5">
                <h2>
                  <span>OR</span>
                </h2>
              </div>
              <div className="d-flex justify-content-center mb-5 gap-4">
                <button className="btn btn-facebook px-4">
                  <i className="fab fa-facebook-f me-2"></i> Facebook
                </button>
                <button className="btn btn-google px-4">
                  <img src={google} className="me-2" alt="Google" />
                  Google
                </button>
              </div>
              <p className="already-acc my-5">
                <Link to="/register" className="login-link">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
