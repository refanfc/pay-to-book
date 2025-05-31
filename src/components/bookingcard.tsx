
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

export function BookingCard() {
  const { primaryWallet, user } = useDynamicContext();

  const handleBooking = async () => {
    // Interact with smart contract or external booking API
    alert("Booking paid and scheduled!");
  };

  return (
    <div>
      <h2>Book 30 mins with @founder</h2>
      <p>Cost: 5 USDC</p>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}
