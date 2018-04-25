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
              <Table.BodyColumn>
                <styles.OrderLink to={`/admin/orders/${order.id}`}>
                  {order.email}
                </styles.OrderLink>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <styles.OrderLink to={`/admin/orders/${order.id}`}>
                  {order.amount}
                </styles.OrderLink>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <styles.OrderLink to={`/admin/orders/${order.id}`}>
                  {order.status}
                </styles.OrderLink>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <styles.OrderLink to={`/admin/orders/${order.id}`}>
                  {order.idempotenceKey}
                </styles.OrderLink>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <styles.OrderLink to={`/admin/orders/${order.id}`}>
                  {order.paymentId}
                </styles.OrderLink>
              </Table.BodyColumn>
              <Table.BodyColumn>
                <styles.OrderLink to={`/admin/orders/${order.id}/edit`}>
                  Edit
                </styles.OrderLink>
              </Table.BodyColumn>
            </Table.BodyRow>
          ))}
      </Table.Body>
    </Table.Table>
  </styles.OrderList>
);

export default OrderList;
