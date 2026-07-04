import dinner from '../assets/dinner.png'
function ConfirmedBooking() {
  return (
    <main>
      <div className='confirmed'>
      <h1>Booking Confirmed!</h1>
      <i><img src={dinner} width={150} alt='Dinner' /></i>
      </div>
    </main>
  );
}

export default ConfirmedBooking;