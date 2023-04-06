import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./CheckoutForm.module.css";

const userData = [
  {
    id: 1,
    name: "Baghajatin, Kolkata, WB",
    distance: "10km",
  },
  {
    id: 2,
    name: "Garia, Kolkata, WB",
    distance: "20km",
  },
  {
    id: 3,
    name: "Sealdaha, Kolkata, WB",
    distance: "15km",
  },
  {
    id: 4,
    name: "Jadavpur, Kolkata, WB",
    distance: "25km",
  },
];

const CheckoutForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [setupDate, setSetupDate] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transportCharge, setTransportCharge] = useState(0);
  const [distance, setDistance] = useState(0);
  const [message, setMessage] = useState("");
  const [eventDuration, setEventDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      endDate,
      setupDate,
      location,
      paymentMethod,
      transportCharge,
      distance,
    };
    console.log(data);
  };

  const calculateCharge = (e) => {
    // const loc = parseInt(e.target.value);
    const loc = e.target.value.name;
    const dis = parseInt(e.target.value) * 2;
    console.log(`dis ${dis}`);
    setLocation(loc);
    setDistance(dis);
    if (dis < 30) {
      setTransportCharge(1500);
    } else {
      const addDis = dis - 30;
      const totalCharge = 1500 + addDis * 50;
      setTransportCharge(totalCharge);
    }
  };

  useEffect(() => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const setup = new Date(setupDate).getTime();
    const now = new Date().getTime();

    if (end < setup) {
      setMessage(
        "Event end date and time should not be before setup date and time"
      );
    } else if (setup > start) {
      setMessage("Setup date and time should not be after event date");
    } else if ((start - setup) / (1000 * 60 * 60 * 24) > 1) {
      setMessage("Setup date can not be more than 1 day before event");
    } else {
      setMessage("");
      setEventDuration(
        `${(end - start) / (1000 * 60 * 60 * 24)} days ${
          ((end - start) / (1000 * 60 * 60)) % 24
        } hours`
      );
    }
  }, [startDate, endDate, setupDate]);

  return (
    <Card className={classes["parent-container"]}>
      <form className={classes["form-container"]} onSubmit={handleSubmit}>
        <label className={classes["form-label"]}>
          Event Start date and time:
          <input
            className={classes["form-input"]}
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label className={classes["form-label"]}>
          Event End date and time:
          <input
            className={classes["form-input"]}
            type="datetime-local"
            value={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label className={classes["form-label"]}>
          Setup date and time:
          <input
            className={classes["form-input"]}
            type="datetime-local"
            value={setupDate}
            max={startDate}
            onChange={(e) => setSetupDate(e.target.value)}
          />
        </label>
        <label className={classes["form-label"]}>
          Location where event will be held:
          <select
            className={classes["form-input"]}
            value={location}
            onChange={calculateCharge}
          >
            {userData.map((item) => (
              <option key={item.id} value={item.distance}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className={classes["form-label"]}>
          Payment method:
          <select
            className={classes["form-input"]}
            value={location}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="UPI">UPI</option>
            <option value="cash">Cash</option>
            <option value="online">Online</option>
            <option value="cheque">Cheque</option>
          </select>
        </label>

        {transportCharge>0 && <div>Transport charge: {transportCharge}</div>}

        {distance>0 && <div>Total distance: {distance*2}</div>}
        {message && <p className={classes["form-error"]}>{message}</p>}
        {!isNaN(eventDuration) && eventDuration.length !== 0 && (
          <p className={classes["form-success"]}>
            Event duration: {eventDuration}
          </p>
        )}
        <button className={classes["form-button"]} type="submit">
        Make enquiry
        </button>
      </form>
    </Card>
  );
};
export default CheckoutForm;
