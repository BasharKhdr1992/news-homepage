import styled from "styled-components";
const NewCardStyled = styled.div`
  padding: 1rem 0rem;
  .title {
    color: hsl(36, 100%, 99%);
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: hsl(35, 77%, 62%);
    }
  }
  .text {
    color: hsl(233, 8%, 79%);
    font-size: 12px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid hsl(233, 8%, 79%);
  }
`;

export default NewCardStyled;
