import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;

  margin: 40px auto;
  display: flex;
  gap: 32px;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  flex: 1;

  header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
