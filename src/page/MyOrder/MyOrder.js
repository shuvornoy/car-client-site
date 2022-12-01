import { useQuery } from "@tanstack/react-query";
import React from "react";
import './MyOrder.css'


const MyAppointment = () => {
  

  
    const url = "https://car-server-site-chi.vercel.app/bookings?";
    console.log(url)
    const { data: bookings = [] } = useQuery({
      queryKey: ["bookings"],
      queryFn: async () => {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      },
    });

  return (
    <div>
      <h3 className="text-3xl mb-5">My Order</h3>

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Location</th>
            <th>Mileage</th>
            <th>Engine</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.price}$</td>
                <td>{booking.location}</td>
                <td>{booking.Mileage}</td>
                <td>{booking.engine}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
