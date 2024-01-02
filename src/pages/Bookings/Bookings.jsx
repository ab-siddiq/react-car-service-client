import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data)
        }else{
          Navigate('/')
        }
      });
  }, [url,navigate]);
  const handleDeleteBooking = (id) => {
    const proceed = confirm("Are you sure to delete??");
    if (proceed) {
      console.log(id);
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = booking.find((booking) => onseeking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  return (
    <div className="overflow-x-auto mx-auto h-screen mt-24">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <button className="btn btn-circle btn-sm ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </th>
            <th>SL</th>
            <th>Image</th>
            <th>CustomerName</th>
            <th>Phone Number</th>
            <th>Price</th>
            <th>Service Name</th>
            <th>Service Id</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, ind) => (
            <tr key={booking._id}>
              <td>
                <button
                  onClick={() => {
                    handleDeleteBooking(booking._id);
                  }}
                  className="btn btn-circle btn-sm bg-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
              <td>{ind + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-24">
                    <img src={booking.img} alt={booking.serviceName} />
                  </div>
                </div>
              </td>
              <td>{booking.customerName}</td>
              <td>{booking.phone}</td>
              <td>${booking.price}</td>
              <td>{booking.serviceName}</td>
              <td>{booking.serviceId}</td>
              <td>{booking.email}</td>
              <td>{booking.date}</td>
              <td>
                {booking.status ? (
                  <span className="font-bold text-green-700">Confirmed</span>
                ) : (
                  <button
                    onClick={() => handleBookingConfirm(booking._id)}
                    className="btn btn-ghost text-yellow-700"
                  >
                    Please Confirm
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
