import { Board, Container, OrdersContainer } from "./styles";

export function Orders() {
  return (
    <Container>
      <Board>
        <header>
          <span>🕘</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersContainer>
      </Board>
      <Board>
        <header>
          <span>🕘</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersContainer>
      </Board>
      <Board>
        <header>
          <span>🕘</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersContainer>
      </Board>
    </Container>
  );
}
