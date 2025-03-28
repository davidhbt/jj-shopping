import { useEffect, useState } from "react";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ensure Telegram Web HomePage is available
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Expand to full height
      setUser(tg.initDataUnsafe?.user || null); // Get user data
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Telegram Mini HomePage</h1>
      {user ? (
        <div>
          <p>👋 Hello, {user.first_name}!</p>
          <p>Your ID: {user.id}</p>
          <p>Username: @{user.username}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default HomePage;
