import React from "react";
import styled from "styled-components";

const SliderSec = () => {
  const HandleChange = () => {
    console.log("clicked");
  };
  return (
    <>
      <Container>
        <div className="banner">
          <div className="container main-part">
            <h1>slider section</h1>
            <p>slider head content</p>
            <p>
              <a
                class="btn btn-success"
                data-bs-toggle="collapse"
                href="#header-section"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Edit
              </a>
            </p>
            <div class="collapse" id="header-section">
              <div class="card card-body">
                <form>
                  <textarea
                    type="text"
                    class="form-control"
                    name="sliderHeading"
                    // value={data.fullname}
                    onChange={HandleChange}
                  />

                  <button type="submit" class="btn btn-outline-success mt-3">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SliderSec;
const Container = styled.div`
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: 7rem;
  }
  .main-part {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    width: 80%;
    box-shadow: #8dce5d 0px 10px 14px;
    border-radius: 13px;
    margin-bottom: 4rem;
    margin-left: 10rem;
    @media (max-width: 500px) {
      margin-left: 4rem;
    }
  }
  .collapse {
    width: 100%;
  }
  .card {
    border: none;
  }
`;
