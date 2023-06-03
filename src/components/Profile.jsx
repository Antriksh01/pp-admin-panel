import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <>
      <Container>
        <div className="container banner">
          <h1>Profile</h1>
        </div>
      </Container>
    </>
  );
};

export default Profile;
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
