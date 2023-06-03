import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useAuth } from "../context/auth.jsx";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const sendData = {
      email: data.email,
      password: data.password,
    };
    console.log(sendData);
    try {
      const response = await axios.post(
        "http://localhost:3200/api/v1/auth/login",
        sendData
      );
      if (response.data.success) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });

        console.log(response);
        alert("Login successfully");
        localStorage.setItem("auth", JSON.stringify(response.data));

        navigate(location.state || "/");
      } else {
        alert("invalid credentials");
      }
    } catch (err) {
      alert(err.response.data.msg);
      console.log(err.response.data.msg);
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <div className="container banner">
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <h1 className="text-center">Login</h1>

              <div class="mb-3">
                <label for="email" class="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={data.email}
                  onChange={HandleChange}
                />
              </div>

              <div class="mb-3 passInput">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type={visible ? "text" : "password"}
                  class="form-control passInput"
                  name="password"
                  value={data.password}
                  onChange={HandleChange}
                />
                {visible ? (
                  <AiOutlineEye
                    className="visIcon"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="visIcon"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className="rememberDiv">
                <div className="remembersecDiv">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="rememberInput"
                  />
                  <label htmlFor="remember-me" className="ml-2 remLabel">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="remLabel">
                    Forgot Password
                  </Link>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="submit" class="btn sub-btn form-control">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
const Container = styled.div`
  background: linear-gradient(265deg, #db0f19, #fff, #000);
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (max-width: 500px) {
      align-items: start;
      margin-top: 5rem;
    }
  }
  form {
    padding: 2rem;
    // box-shadow: black 0px 0px 5px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 1.2) 0px 3px 92px;
    label {
      font-weight: bold;
      color: #000;
    }
    .passInput {
      position: relative;
    }
    input {
      box-shadow: 1px 1px 5px #000;
    }
    h1 {
      color: rgb(11 13 9);
      text-shadow: 0px 9px 12px #080807;
    }
    button {
      border-color: #8dce5d;
      background: linear-gradient(180deg, #fff, #f1f1f1, #8dce5d);
      box-shadow: 2px 6px 8px #000;
      margin-top: 0.5rem;
    }
    button:hover {
      background-color: #8dce5d;
      box-shadow: 2px 6px 18px #000;
      color: #000;
    }
  }
  .visIcon {
    position: absolute;
    right: 0.5rem;
    top: 2.5rem;
  }
  .rememberDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .remembersecDiv {
      display: flex;
      align-items: center;
    }
    .rememberInput {
      height: 1rem;
      width: 1rem;
      color: #0075ff;
      --tw-text-opacity: 1;
      border-radius: 0.25rem;
    }
    .remLabel {
      display: block;
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-left: 0.5rem;
      font-weight: bold;
    }
    a {
      text-decoration: none;
    }
  }
`;
