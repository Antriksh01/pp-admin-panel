import React from "react";
import styled from "styled-components";

const Blog = () => {
  return (
    <>
      <Container>
        <div className="container banner">
          <h1>Blog</h1>
        </div>
      </Container>
    </>
  );
};

export default Blog;
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
