import React from "react";
import * as Table from "../Table";
import * as styles from "./styles";

const OrderList = ({ orders }) => (
  <styles.OrderList>
    <Table.Table>
      <Table.ColGroup>
        <Table.Col width="20%" />
        <Table.Col width="10%" />
        <Table.Col width="20%" />
        <Table.Col width="20%" />
        <Table.Col width="20%" />
        <Table.Col width="10%" />
      </Table.ColGroup>

      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderColumn>Email</Table.HeaderColumn>
          <Table.HeaderColumn>Amount</Table.HeaderColumn>
          <Table.HeaderColumn>Status</Table.HeaderColumn>
          <Table.HeaderColumn>Idempotance Key</Table.HeaderColumn>
          <Table.HeaderColumn>Payment Id</Table.HeaderColumn>
          <Table.HeaderColumn />
        </Table.HeaderRow>
      </Table.Header>

      <Table.Body>
        {orders &&
          orders.map(order => (
            <Table.BodyRow key={order.id}>
              <Table.BodyColumn>{order.email}</Table.BodyColumn>
              <Table.BodyColumn>{order.amount}</Table.BodyColumn>
              <Table.BodyColumn>{order.status}</Table.BodyColumn>
              <Table.BodyColumn>{order.idempotenceKey}</Table.BodyColumn>
              <Table.BodyColumn>{order.paymentId}</Table.BodyColumn>
              <Table.BodyColumn>Edit</Table.BodyColumn>
            </Table.BodyRow>
          ))}
      </Table.Body>
    </Table.Table>
  </styles.OrderList>
);

export default OrderList;
