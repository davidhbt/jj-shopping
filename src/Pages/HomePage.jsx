import React, { useState } from "react";
import Test from "./Test";
import TelegramUserSDK from "./TelegramUserSDK";
import { useContext } from "react";
import { userState } from "../App";
import AnimatedShop from "../assets/WebP/Shop.webp";
import "./HomePage.css";

function HomePage() {
  const [transactionNo, setTransactionNo] = useState();

  const UserData = useContext(userState);

  console.log(UserData);

  return (
    <div className="page">
      <div className="HomePageContainer">
        <div className="HomePageHeading">
          <img src={AnimatedShop} alt="shopping cart" />
          <h1>JJ Shopping</h1>
          <p>Buy Original and Cheap items at a Discount</p>
        </div>
        <div className="HPListing">
          <div className="HPItems">
            <h1>Items</h1>
            <div className="HPItem">
              <div className="HPBanner">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrs8rel7hFNfRkQmLTkCrl0tnVK6Q5Et4Tyw&s"
                  alt="Watch"
                />
              </div>
              <div className="HPDetail">
                <h1>Watches</h1>
                <p>
                  Analog Watches, Digital Watches, SmartWatches.. we got it all
                  with a discount..
                </p>
              </div>
            </div>
          </div>
          <div className="HPService">
            <h1>Services</h1>
            <div className="HPItem">
              <div className="HPBanner">
                <img
                  src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/06/Telegram-Premium.jpg"
                  alt="Telegram"
                />
              </div>
              <div className="HPDetail">
                <h1>Telegram Premium</h1>
                <p>
                  Analog Watches, Digital Watches, SmartWatches.. we got it all
                  with a discount..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
