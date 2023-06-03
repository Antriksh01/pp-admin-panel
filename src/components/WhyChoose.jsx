import React from "react";
import styled from "styled-components";

const WhyChoose = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  const HandleChange = () => {
    console.log("aswhychoose");
  };
  return (
    <>
      <Container>
        <div className="banner">
          <div className="container main-part">
            <h1>Why choose us section</h1>
            <p>slider head content</p>
            <p>
              <a
                class="btn btn-success"
                data-bs-toggle="collapse"
                href="#whychoose-section"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Edit
              </a>
              <button className="btn btn-danger m-3">Delete</button>
            </p>
            <div class="collapse" id="whychoose-section">
              <div class="card card-body">
                <form onSubmit={onSubmit} className="why-choose-form">
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
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12"></div>
                      <div class="col-lg-2 col-md-3 col-sm-12 col-12">
                        <label for="inputPassword6" class="col-form-label">
                          Medicine Name :
                        </label>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <input
                          type="password"
                          id="inputPassword6"
                          class="form-control"
                          aria-describedby="passwordHelpInline"
                        />
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12"></div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12"></div>
                      <div class="col-lg-2 col-md-3 col-sm-12 col-12">
                        <label for="inputPassword6" class="col-form-label">
                          Market Price :
                        </label>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <input
                          type="password"
                          id="inputPassword6"
                          class="form-control"
                          aria-describedby="passwordHelpInline"
                        />
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12"></div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12"></div>
                      <div class="col-lg-2 col-md-3 col-sm-12 col-12">
                        <label for="inputPassword6" class="col-form-label">
                          Our Price :
                        </label>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <input
                          type="password"
                          id="inputPassword6"
                          class="form-control"
                          aria-describedby="passwordHelpInline"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <img src={file} /> */}

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

export default WhyChoose;
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
  margin-left: 15rem;
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
