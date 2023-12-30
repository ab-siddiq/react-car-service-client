import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title,price,_id,img } = service;
  const handleCheckout = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const phone = form.phone.value
    const price = form.price.value
    const serviceName = form.service.value
    const email = form.email.value
    const date = form.date.value
    const bookingDetails = {
      customerName: name,
      phone:phone,
      price:price,
      serviceName:serviceName,
      serviceId: _id,
      email:email,
      date:date,
      img,
    }
    console.log(bookingDetails)
    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingDetails)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }
  return (
    <div>
      <form className="card-body" onSubmit={handleCheckout}>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service</span>
            </label>
            <input
              type="text"
              name="service"
              defaultValue={title}
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={'$'+price}
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="bg-[#FF3811] px-3 py-2 border-2 border-transparent rounded-lg text-white hover:bg-transparent hover:border-2 hover:border-[#FF3811] hover:text-[#FF3811] font-bold">Checkout</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
