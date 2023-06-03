import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/auth";
import { useLocation, useNavigate } from "react-router-dom/dist";

const ForgotPassword = () => {
  const [auth, setAuth] = useAuth();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
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
      newPassword: data.newPassword,
    };
    console.log(sendData.email);
    try {
      const response = await axios.post(
        "http://localhost:4600/api/v1/auth/forgot-password",
        sendData
      );
      if (response.data.success) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });

        console.log(response);
        alert("password updated successfully");
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
        <div className="banner">
          <form onSubmit={onSubmit}>
            <h3 className="text-white">Reset Password</h3>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="your Email"
                name="email"
                value={data.email}
                onChange={HandleChange}
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Enter new password"
                name="newPassword"
                value={data.newPassword}
                onChange={HandleChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                change Password
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
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
    form {
      width: auto;

      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(149, 157, 165, 1.2) 0px 3px 92px;
      h3 {
        text-align: center;
        color: black !important;
      }
      p {
        text-align: right;
        a {
          color: #255b47;
          text-decoration: none;
          font-weight: bold;
        }
      }
      .d-grid {
        button {
          border-color: #8dce5d;
          background: linear-gradient(180deg, #fff, #f1f1f1, #8dce5d);
          box-shadow: 2px 6px 8px #000;
          margin-top: 0.5rem;
          color: #000;
        }
        button:hover {
          background-color: #8dce5d;
          box-shadow: 2px 6px 18px #000;
          color: #000;
        }
      }
      input {
        box-shadow: 0px 0px 5px #000;
      }
    }
  }
`;
