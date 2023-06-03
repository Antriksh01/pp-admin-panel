import React from "react";
import styled from "styled-components";

const MediaSec = () => {
  const onSubmit = () => {
    console.log("click");
  };

  const HandleChange = () => {
    console.log("click");
  };
  return (
    <>
      <Container>
        <div className="banner">
          <div className="container main-part">
            <h1>Media section</h1>
            <p>slider head content</p>
            <p>
              <a
                class="btn btn-success"
                data-bs-toggle="collapse"
                href="#media-section"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Add Images
              </a>{" "}
              <button className="btn btn-danger m-3">Delete</button>
            </p>
            <div class="collapse" id="media-section">
              <div class="card card-body">
                <form className="why-choose-form" onSubmit={onSubmit}>
                  <div className="container">
                    <div className="row g-2">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12"></div>
                      <div class="col-lg-2 col-md-3 col-sm-12 col-12">
                        <label for="inputPassword6" class="col-form-label">
                          Add Image :
                        </label>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type="file" onChange={HandleChange} />
                      </div>
                    </div>
                  </div>

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

export default MediaSec;
const Container = styled.div`
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: 2rem;
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
  form{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .btn-outline-success
  }
`;
