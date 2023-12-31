import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="overflow-x-auto mx-auto h-screen mt-24">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>CustomerName</th>
            <th>Phone Number</th>
            <th>Price</th>
            <th>Service Name</th>
            <th>Service Id</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, ind) => (
            <tr>
              <td>{ind + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={booking.img} alt={booking.serviceName} />
                  </div>
                </div>
              </td>
              <td>{booking.customerName}</td>
              <td>{booking.phone}</td>
              <td>{booking.price}</td>
              <td>{booking.serviceName}</td>
              <td>{booking.serviceId}</td>
              <td>{booking.email}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
