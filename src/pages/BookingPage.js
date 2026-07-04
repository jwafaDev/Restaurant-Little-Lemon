import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  return fetchAPI(new Date(action));
}

function BookingPage() {
   const navigate = useNavigate();

  const [availableTimes, dispatch] =
    useReducer(
      updateTimes,
      [],
      initializeTimes
    );
    const submitForm = (formData) => {
    const success = submitAPI(formData);

      if (success) {
        navigate("/confirmed");
      }
    };
  return (
    <main>
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;