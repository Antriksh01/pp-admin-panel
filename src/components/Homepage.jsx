import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AdWhychoose from "../pages/Homepage/AdWhychoose";
import SliderSec from "../pages/Homepage/SliderSec";
import AboutSec from "../pages/Homepage/AboutSec";
import MediaSec from "../pages/Homepage/MediaSec";

const Homepage = () => {
  const [sliderHead, setSliderHead] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  // const [auth, setAuth] = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost/admin-dashboard-Generic-mediworld/why-choose.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleChange = (e) => {
    setSelectFile(e.target.files[0]);
    console.log("clicked");
  };
  return (
    <>
      <Container>
        <div className="container banner">
          <SliderSec />
          {/* home-about-part start--------------- */}

          <AboutSec />
          {/* home-about-part-end--------------- */}

          {/* home-whychoose-part start--------------- */}

          <AdWhychoose />
          {/* home-whychoose-part-end--------------- */}
          {/* home-gallery-part start--------------- */}

          <MediaSec />
          {/* home-gallery-part-end--------------- */}
        </div>
      </Container>
    </>
  );
};

export default Homepage;
const Container = styled.div`
  overflow-x: hidden;
  // .banner {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  //   height: 100%;
  //   margin-top: 7rem;
  //   margin-left: 3rem;
  // }

  // .main-part {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  //   padding: 3rem;
  //   width: 80%;
  //   box-shadow: #8dce5d 0px 10px 14px;
  //   border-radius: 13px;
  //   margin-bottom: 4rem;
  // }
  // .collapse {
  //   width: 100%;
  // }
  // .card {
  //   border: none;
  // }
  // textarea {
  //   height: 100%;
  // }
  // .why-choose-form {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   button {
  //     width: fit-content;
  //   }
  //   label{
  //     display: flex;
  //     align-content: center;
  //     justify-content: flex-start;
  // }
  //   }
  // }
`;
