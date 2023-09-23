import { useEffect, useState } from "react";

import { api } from "../../utils/api";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

import socketIo from "socket.io-client";
import { Order } from "../../@types/Order";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo("http://localhost:3000", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order) => {
      setOrders((prevState) => [...prevState, order]);
    });
  }, []);

  useEffect(() => {
    api.get("/orders").then((response) => setOrders(response.data));
  }, []);

  const waitingOrder = orders.filter((order) => order.status === "WAITING");
  const inProductionOrder = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const finishedOrder = orders.filter((order) => order.status === "DONE");

  function handleChangeOrderStatus(
    orderId: string,
    newStatus: Order["status"]
  ) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  }

  function handleDeleteOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={waitingOrder}
        onCancelOrder={handleDeleteOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={inProductionOrder}
        onCancelOrder={handleDeleteOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={finishedOrder}
        onCancelOrder={handleDeleteOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
    </Container>
  );
}
