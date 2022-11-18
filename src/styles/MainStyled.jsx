import styled from "styled-components";

const MainStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    width: 65%;
  }
  img {
    width: 100%;
  }
  .content {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
  }

  .content > .title {
    width: 50%;
    color: hsl(240, 100%, 5%);
    font-weight: 900;
    font-size: 2.95rem;
  }

  .content-text {
    width: 46%;
  }

  .content-text > .text {
    margin-bottom: 1rem;
    font-size: 13px;
    line-height: 1.3rem;
    color: hsl(236, 13%, 42%);
  }
  .right {
    width: 30%;
    background-color: hsl(240, 100%, 5%);
    padding: 2rem 1rem;
  }
  .right > .title {
    color: hsl(35, 77%, 62%);
    font-size: 2.5rem;
    font-weight: 900;
  }
  .btn-primary {
    color: hsl(36, 100%, 99%);
    padding: 0.6rem 1.7rem;
    text-transform: uppercase;
    font-weight: 700;
    background-color: hsl(5, 85%, 63%);
    border: none;
    letter-spacing: 0.25rem;
    cursor: pointer;
    &:hover {
      background-color: hsl(240, 100%, 5%);
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    .left,
    .right {
      width: 100%;
    }

    .right {
      margin-top: 1rem;
    }
    .content {
      flex-direction: column;
    }
    .content > .title,
    .content-text {
      width: 100%;
    }
  }
`;

export default MainStyled;
