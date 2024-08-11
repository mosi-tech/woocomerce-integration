'use client';
import { useState } from 'react';

export default function Home() {
  const [storeUrl, setStoreUrl] = useState('');
  const [userId, setUserId] = useState('');

  const handleOAuth = async () => {
    const response = await fetch('/api/start-oauth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, storeUrl }),
      //Get the userId from signed-in user
    });

    console.log("Here")
    // console.log(response);

    const data = await response.json()
    // console.log("Data")
    console.log(data);

    if (data.success) {
      window.location.href = data.url;
    } else {
      
      console.error('Error starting OAuth', data.error);
    }
  };

  return (
    <div>
      <h1>Connect Your WooCommerce Store</h1>
      <input
        type="text"
        placeholder="WooCommerce Store URL"
        value={storeUrl}
        onChange={(e) => setStoreUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleOAuth}>Start OAuth</button>
    </div>
  );
}
