import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Container>
        <div className="container banner">
          <h1>About</h1>
        </div>
      </Container>
    </>
  );
};

export default About;
const Container = styled.div`
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1 {
      font-size: 10rem;
    }
  }
`;
