import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetOrderDetailsQuery } from "../../slices/ordersApiSlice";
function Order() {
  const { id: orderId } = useParams();
  const { data: order } = useGetOrderDetailsQuery(orderId);

  return (
    <>
      {order ? (
        <>
          <p>Order Details</p>
          <p>Order Number: {orderId}</p>
          <div>
            <p>paymentMethod : {order.paymentMethod}</p>
            <p>
              Name : {order.shippingAddress.firstName}{" "}
              <span>{order.shippingAddress.lastName}</span>
            </p>
            <h3>Shipping Details</h3>
            <p>Street Address : {order.shippingAddress.address}</p>
            <p>{order.shippingAddress.address2}</p>

            <p>Postal Code : {order.shippingAddress.postalCode}</p>
            <p>City : {order.shippingAddress.Mississauga}</p>
            <p>Country : {order.shippingAddress.country}</p>
            <p>Phone Number : {order.shippingAddress.phoneNumber}</p>
            <p>Total : {order.itemsPrice}</p>
          </div>
        </>
      ) : (
        <p>No order</p>
      )}
    </>
  );
}

export default Order;
