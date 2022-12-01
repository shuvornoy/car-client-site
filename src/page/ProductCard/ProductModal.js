import React from 'react';
import toast from 'react-hot-toast';

const ProductModal = ({ modal, setModal }) => {
    const { name, price, Mileage, location, engine, transmission } = modal;

    const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const location = form.location.value;
    const email = form.email.value;
    const engine = form.engine.value;
    const transmission = form.transmission.value;
    const Mileage = form.Mileage.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const booking = {
      name,
      price, 
      Mileage, 
      location, 
      engine, 
      transmission,
      email,
      phone
    };
    
    fetch("https://car-server-site-chi.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setModal(null);
          toast.success("Order confirmed");
        } else {
          toast.error(data?.message);
        }
      });
}
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Check Your Details Submit Now</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={name}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="Mileage"
              type="text"
              defaultValue={Mileage}
              disabled
              placeholder="Mileage"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="location"
              disabled
              defaultValue={location}
              placeholder="location"
              className="input w-full input-bordered"
            />
            <input
              name="engine"
              type="text"
              disabled
              defaultValue={engine}
              placeholder="engine"
              className="input w-full input-bordered"
            />
            <input
              name="transmission"
              type="text"
              disabled
              defaultValue={transmission}
              placeholder="transmission"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              disabled
              defaultValue={price}
              placeholder="Price"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />

            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductModal;