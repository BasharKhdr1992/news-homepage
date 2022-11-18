import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0rem;
  .right {
    display: flex;
    justify-content: flex-end;
  }
  .link {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0 1rem;
    text-transform: capitalize;
    color: hsl(236, 13%, 42%);
    &:hover {
      color: hsl(5, 85%, 63%);
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .mobile {
    display: none;
  }
  .mobile > img {
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    padding: 0 0 2rem 0;
    .right {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export default NavbarStyled;
