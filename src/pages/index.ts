
/// Pay-to-Book Farcaster Mini App with Dynamic.xyz and Base Chain

// 1. Install Dependencies: // yarn add next react react-dom @dynamic-labs/sdk-react-core ethers

// 2. /pages/index.tsx import { useDynamicContext, DynamicWidget, DynamicContextProvider } from '@dynamic-labs/sdk-react-core'; import Head from 'next/head'; import { useState } from 'react';

function BookingCard() { const { user, primaryWallet } = useDynamicContext(); const [status, setStatus] = useState('');

const handleBooking = async () => { setStatus('Processing payment...'); try { // Sample: Replace with contract interaction on Base // You can call a backend API to handle payment + booking logic await new Promise((resolve) => setTimeout(resolve, 1500)); setStatus('Booking confirmed!'); } catch (err) { setStatus('Booking failed.'); } };

return ( <div className="p-4 rounded-xl shadow-xl bg-white text-black max-w-md mx-auto"> <h2 className="text-xl font-bold mb-2">Book 30 mins with @founder</h2> <p className="mb-4">Cost: 5 USDC (on Base)</p> {user ? ( <> <button onClick={handleBooking} className="bg-blue-600 text-white px-4 py-2 rounded">Book Now</button> <p className="mt-2 text-sm">{status}</p> </> ) : ( <p className="text-sm">Please connect wallet to book.</p> )} </div> ); }

export default function Home() { return ( <> <Head> <title>Pay-to-Book</title> <meta name="description" content="Schedule time with your favorite creator via Farcaster Mini App" /> </Head> <DynamicContextProvider settings={{ environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV, projectId: process.env.NEXT_PUBLIC_DYNAMIC_PROJECT_ID, walletConnectors: ['metamask', 'walletconnect'], }} > <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> <DynamicWidget /> <BookingCard /> </main> </DynamicContextProvider> </> ); }

// 3. .env.example // NEXT_PUBLIC_DYNAMIC_ENV=production // NEXT_PUBLIC_DYNAMIC_PROJECT_ID=your_dynamic_project_id

// 4. Vercel deploy: vercel --prod

// 5. Farcaster Mini App guidelines: // - Use a clean card layout, optimized for mobile // - Set up unfurl metadata in Head // - Optional: connect to backend API or smart contract

// Optional Backend (Node, Express, or Edge): // - Charge 5 USDC using ethers.js to a defined address // - Confirm tx hash and emit booking confirmation

