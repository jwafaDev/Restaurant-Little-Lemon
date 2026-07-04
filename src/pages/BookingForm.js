import { useState } from "react";

function BookingForm({
  availableTimes,
  dispatch,
  submitForm
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      date,
      time,
      guests,
      occasion
    });
  };

  const isFormValid =
  Boolean(date) &&
  Boolean(time) &&
  guests >= 1 &&
  guests <= 10 &&
  Boolean(occasion);

  return ( 
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px"
      }}
    >
      <label htmlFor="res-date">Choose date</label>

      <input
        type="date"
        id="res-date"
        value={date}
        required
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(e.target.value);
        }}
      />

      <label htmlFor="res-time">Choose time</label>

      <select
        id="res-time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        required
        aria-label="Number of guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>

      <select
        id="occasion"
        required
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select Occasion</option>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="Submit reservation form"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;