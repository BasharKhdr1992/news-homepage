import styled from "styled-components";

const SidebarStyled = styled.div`
  position: absolute;
  z-index: 1;
  width: ${(props) => (props.sidebar ? "100%" : "0%")};
  height: ${(props) => (props.sidebar ? "100%" : "0%")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  .sidebar {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 60%;
    background-color: hsl(36, 100%, 99%);
    top: 0;
    right: -100%;
    transition: right 0.4s ease-in;
    padding: 2rem;
  }
  .links,
  .link,
  .header {
    display: none;
  }
  &:has(.active) .header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5rem;
  }
  .header > img {
    cursor: pointer;
  }
  &:has(.active) .links {
    display: flex;
    flex-direction: column;
  }
  &:has(.active) .link {
    color: hsl(240, 100%, 5%);
    padding: 1.5rem 0rem;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
    text-align: left;
    display: block;
    &:hover {
      font-weight: 900;
    }
  }
  .sidebar.active {
    right: 0;
  }
`;

export default SidebarStyled;
