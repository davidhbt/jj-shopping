import { useEffect, useState } from "react";
import axios from "axios";

const TelegramUserSDK = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Expand the Mini App

      const initData = tg.initData; // Encoded init data
      if (initData) {
        verifyUser(initData);
      }
    }
  }, []);

  const verifyUser = async (initData) => {
    try {
      const response = await axios.post("https://your-backend.com/verify-user", { initData });
      setUser(response.data.user);
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading user info...</p>;
  if (!user) return <p>Failed to load user data</p>;

  return (
    <div>
      <h3>Welcome, {user.first_name}!</h3>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Language: {user.language_code}</p>
      <img src={user.photo_url} alt="User Avatar" />
    </div>
  );
};

export default TelegramUserSDK;
