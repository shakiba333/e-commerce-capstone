import React from "react";
import { useGetMyOrdersQuery } from "../../slices/ordersApiSlice";
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Orders() {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  return (
    <Row>
      {orders ? (
        <Col md={9}>
          <h2>My Orders</h2>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="dark">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      ) : (
        <p>You have no orders</p>
      )}
    </Row>
  );
}

export default Orders;
