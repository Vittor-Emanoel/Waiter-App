import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕘" title="Fila de espera" />
    </Container>
  );
}
