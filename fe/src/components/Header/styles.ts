import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 198px;
  background: #d73035;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;

  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 2rem;
  }

  h2 {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.9;
    margin-top: 6px;
  }
`;
