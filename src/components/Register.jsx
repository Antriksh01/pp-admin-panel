import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const sendData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    console.log(sendData);
    try {
      await axios.post("http://localhost:3200/api/v1/auth/register", sendData);
      alert("Registration completed ! now login");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <div className="container banner">
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <h1>Admin Registration</h1>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={data.name}
                  onChange={HandleChange}
                />
              </div>
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
              <div class="mb-3">
                <label for="mobile" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  maxLength={10}
                  value={data.phone}
                  onChange={HandleChange}
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  value={data.password}
                  onChange={HandleChange}
                />
              </div>

              <button type="submit" class="btn sub-btn">
                Submit
              </button>
              <p className="forgot-password">
                Already registered <Link to="/login">sign in?</Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
const Container = styled.div`
  background: linear-gradient(180deg, #fff, #f1f1f1, #8dce5d);

  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  form {
    padding: 2rem;
    box-shadow: black 0px 0px 5px inset;
    border-radius: 20px;
    margin-left: 3rem;
    label {
      font-weight: bold;
      color: #000;
    }
    input {
      box-shadow: inset 2px 2px 4px #000;
    }
    h1 {
      color: rgb(11 13 9);
      // text-shadow: 0px 4px 12px #080807;
    }
    button {
      border: none;
      box-shadow: 2px 6px 8px #000;
    }
    button:hover {
      background-color: #8dce5d;
      box-shadow: 2px 6px 18px #000;
      color: #000;
    }
  }
  .forgot-password {
    margin-top: 1rem;
    a {
      text-decoration: none;
    }
  }
`;
