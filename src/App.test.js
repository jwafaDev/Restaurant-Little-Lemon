import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//import { initializeTimes, updateTimes } from "./pages/BookingPage";
import BookingForm from "./pages/BookingForm";


// test("Renders BookingForm heading", () => {
//   render(
//     <BookingForm
//       availableTimes={["17:00", "18:00"]}
//       dispatch={() => {}}
//     />
//   );

//   const headingElement =
//   screen.getByText("Choose date");

//   expect(headingElement).toBeInTheDocument();
// });
 

// window.fetchAPI = jest.fn(() => [
//   "17:00",
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
//   "22:00"
// ]);

// test("initializeTimes returns available times", () => {
//   expect(initializeTimes().length).toBeGreaterThan(0);
// });

// test("updateTimes returns available times", () => {
//   expect(
//     updateTimes([], "2026-06-22").length
//   ).toBeGreaterThan(0);
// });


 test("Date field is required", () => {
   render(
     <BookingForm
       availableTimes={["17:00"]}
       dispatch={() => {}}
      submitForm={() => {}}
     />
   );

   const dateInput = screen.getByLabelText(/choose date/i);

   expect(dateInput).toHaveAttribute("required");
 });
 test("Guests input has min and max values", () => {
   render(
     <BookingForm
       availableTimes={["17:00"]}
       dispatch={() => {}}
       submitForm={() => {}}
     />
   );

   const guestsInput =
     screen.getByLabelText(/number of guests/i);

   expect(guestsInput).toHaveAttribute("min", "1");
   expect(guestsInput).toHaveAttribute("max", "10");
 });
 test("Submit button is disabled initially", () => {
   render(
     <BookingForm
       availableTimes={["17:00"]}
       dispatch={() => {}}
      submitForm={() => {}}
     />
   );

   const submitButton =
     screen.getByDisplayValue(
      /make your reservation/i
     );

   expect(submitButton).toBeDisabled();
});