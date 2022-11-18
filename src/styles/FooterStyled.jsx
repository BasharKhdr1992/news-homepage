import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;
  .card {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
  .card > .img-container {
    width: 30%;
  }

  .text > h1 {
    color: hsl(233, 8%, 79%);
    font-weight: 900;
    font-size: 1.5rem;
  }

  .text > h2 {
    color: hsl(240, 100%, 5%);
    font-weight: 700;
    font-size: 1rem;
  }

  .text > p {
    color: hsl(236, 13%, 42%);
    font-size: 13px;
  }

  .img-container > img {
    width: 100%;
  }

  .card > .text {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;

    .card {
      width: 100%;
      &:not(.last-child) {
        margin-bottom: 2rem;
      }
    }

    .text > h1 {
      font-size: 3rem;
    }
    .text > h2 {
      font-size: 1.5rem;
    }

    .text > p {
      font-size: 16px;
      line-height: 2rem;
    }
  }
`;

export default FooterStyled;
