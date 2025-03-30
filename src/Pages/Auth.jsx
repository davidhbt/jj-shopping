import React, { useEffect, useState } from 'react';
import User_icon from '../assets/WebP/User.webp';
import './Auth.css';

function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if Telegram Login Widget has returned user data
    const urlParams = new URLSearchParams(window.location.search);
    const telegramData = Object.fromEntries(urlParams.entries());

    if (telegramData.id) {
      // Validate the Telegram data (optional, for added security)
      const isValid = validateTelegramAuth(telegramData);
      if (isValid) {
        setUser(telegramData);
      } else {
        console.error("Invalid Telegram authentication data");
      }
    }
  }, []);

  const validateTelegramAuth = (data) => {
    // Replace 'YOUR_BOT_TOKEN' with your bot's token
    const botToken = "YOUR_BOT_TOKEN";
    const secretKey = CryptoJS.HmacSHA256(botToken, "WebAppData").toString();
    const dataCheckString = Object.keys(data)
      .filter((key) => key !== "hash")
      .sort()
      .map((key) => `${key}=${data[key]}`)
      .join("\n");
    const hash = CryptoJS.HmacSHA256(dataCheckString, secretKey).toString();
    return hash === data.hash;
  };

  return (
    <div className='page'>
      <div className="AuthContainer">
        <div className="AuthHeader">
          <img src={User_icon} alt="" className="AuthHImg" />
          <h1 className="AuthHH1">
            Authentication <br /> <span style={{ color: 'var(--color1)' }}></span>
          </h1>
          <p className='AuthHP'>Who are you?</p>
          <p>{user ? `Welcome, ${user.first_name}` : "Please log in via Telegram"}</p>
        </div>
        <div className="AuthContent">
          {!user && (
            <div className="AuthCLogin">
              <script
                async
                src="https://telegram.org/js/telegram-widget.js?7"
                data-telegram-login="YOUR_BOT_USERNAME"
                data-size="large"
                data-radius="10"
                data-auth-url="https://your-backend.com/auth/telegram"
                data-request-access="write"
              ></script>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;