import { useEffect, useState } from "react";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Initialize Telegram Web HomePage
      tg.expand(); // Expand app to full screen

      setUser(tg.initDataUnsafe?.user || null); // Get user details
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Telegram Mini HomePage</h1>
      {user != null ? (
        <div>
          <p>👋 Hello, {user.first_name}!</p>
          <p>Your ID: {user.id}</p>
          <p>Username: @{user.username || "Not set"}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default HomePage;
