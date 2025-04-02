import React, { useEffect, useState } from "react";
import Test from "./Test";
import TelegramUserSDK from "./TelegramUserSDK";
import { useContext } from "react";
import { userState } from "../App";
import AnimatedShop from "../assets/WebP/Shop.webp";
import "./HomePage.css";
import { db } from "../Config/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [transactionNo, setTransactionNo] = useState();

  const UserData = useContext(userState);

  const productref = collection(db, "Catagories");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(productref);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        console.log(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []); // Adding an empty dependency array ensures this runs only once after the component mounts

  // console.log(UserData);

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
            {products.map((item) => {
              if (item.is_product == true) {
                return (
                  <Link className="HPItem">
                    <div className="HPBanner">
                      <img
                        src={item.photo_url}
                        alt="Watch"
                      />
                    </div>
                    <div className="HPDetail">
                      <h1>{item.product_name}</h1>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          <div className="HPService">
            <h1>Services</h1>
            {products.map((item) => {
              if (item.is_product == false) {
                return (
                  <div className="HPItem">
                    <div className="HPBanner">
                      <img
                        src={item.photo_url}
                        alt="Watch"
                      />
                    </div>
                    <div className="HPDetail">
                      <h1>{item.product_name}</h1>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
